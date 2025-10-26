import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import axios from "axios";
dayjs.locale("es");

export default function Index() {
  const localizer = dayjsLocalizer(dayjs);

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/turno`
        );
        const turnos = res.data.map((t) => ({
          id: t.id,
          title: `${t.descripcion} - ${t.nombre}`, // o t.direccion, t.telefono...
          start: new Date(t.fecha),
          end: new Date(t.fecha), // sumá duración
        }));
        setEventos(turnos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTurnos();
  }, []);

  return (
    <div
      style={{
        height: "95vh",
      }}
    >
      <Calendar
        localizer={localizer}
        events={eventos}
        onSelectEvent={async (turno) => {
          const rol = localStorage.getItem("rolUsuario"); // obtiene el rol guardado al logear

          if (rol !== "ADMIN") {
            alert("No tienes permisos para eliminar turnos");
            return;
          }

          if (window.confirm(`¿Eliminar el turno de ${turno.title}?`)) {
            try {
              await axios.delete(
                `${process.env.REACT_APP_BACKEND_URL}/turno/${turno.id}`
              );
              // actualizar estado local para que desaparezca
              setEventos(eventos.filter((e) => e.id !== turno.id));
              alert("Turno eliminado");
            } catch (error) {
              console.error(error);
              alert("Error al eliminar el turno");
            }
          }
        }}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />
    </div>
  );
}

import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

export default function Index() {

   const localizer = dayjsLocalizer(dayjs);

   const eventos = [
    {
      start: dayjs('2025-05-06T05:00:00').toDate(),
      end:dayjs('2025-05-06T08:00:00').toDate(),
      title:"Porton automatico - Lopez Camila"
    },
    {
      start: dayjs('2025-05-10T15:00:00').toDate(),
      end:dayjs('2025-05-10T20:00:00').toDate(),
      title:"Mantenimiento - Gomez Juan"
    },
    {
      start: dayjs('2025-05-06T13:00:00').toDate(),
      end:dayjs('2025-05-06T15:00:00').toDate(),
      title:"Trabajo herreria - Luz Quinteros"
    },
    {
      start: dayjs('2025-05-06T05:00:00').toDate(),
      end:dayjs('2025-05-06T08:00:00').toDate(),
      title:"Porton automatico - Lucas Gimenez"
    }
  ]

  return (
    <div style={{
      height:"95vh"
    }}> 
      <Calendar
      localizer={localizer}
      events={eventos}
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
  )
}

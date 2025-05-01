import React from 'react'
import PropTypes from 'prop-types'

export default function BotonGenerico({texto,onClick,className}) {
  return (
    <button className={`btn ${className}`}  onClick={onClick}>
      {texto}
    </button>
  );
}
BotonGenerico.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };

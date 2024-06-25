import React, { useEffect, useState } from 'react';

export default function Hora(props) {
  const { handleUpdate, text } = props;

  // Estado local para almacenar start y end juntos
  const [horas, setHoras] = useState({
    start: '00:00',
    end: '00:00'
  });

  // Función para manejar cambios en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setHoras(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (horas.start === '' || horas.end === '' || horas.start === '00:00' || horas.end === '00:00') {
      handleUpdate(null)
    } else {
      handleUpdate(horas)
    }
  }, [horas])

  const resetbtn = () =>{
    setHoras({start: '00:00', end: '00:00'})
  }

  return (
    <div className="mt-4">
      <label>{text}</label>
      <div className="flex space-x-2">
        <input
          type="time"
          name="start"
          className="browser-default"
          value={horas.start}
          onChange={handleChange}
        />
        <span>a</span>
        <input
          type="time"
          name="end"
          className="browser-default"
          value={horas.end}
          onChange={handleChange}
        />
        <button onClick={resetbtn} >Resetear</button>
      </div>
    </div>
  );
}

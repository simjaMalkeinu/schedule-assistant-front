import React, { useEffect, useState } from "react";

export default function SelectPre(props) {
  const { data, handleUpdate, valor } = props;

  const [option, setOption] = useState("");

  useEffect(() => {
    setOption(valor);
  }, valor);

  const handleOption = (event) => {
    const selectedOption = event.target.value;
    setOption(selectedOption);

    if (selectedOption !== "Seleccionar") {
      const date = selectedOption.split("-");
      console.log(date);
      const aux = {
        start: date[0],
        end: date[1],
      };

      handleUpdate(aux);
    } else {
      handleUpdate(null)
    }
  };

  return (
    <div className="flex flex-col">
      <label>Actividades Culturales</label>
      <select
        className="browser-default"
        onChange={handleOption}
        value={option || null}
      >
        <option defaultValue>Seleccionar</option>
        {data.map((a, i) => {
          return (
            <option
              value={`${a.horaInicio}-${a.horaFin}`}
              key={a.nombre + "-" + i}
            >
              {a.nombre}
            </option>
          );
        })}
      </select>
    </div>
  );
}

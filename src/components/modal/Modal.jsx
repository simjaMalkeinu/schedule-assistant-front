import PropTypes from "prop-types";
import "./modal.css";

import Button, { ButtonOutline } from "../button/button";
import ButtonCourseButton from "../buttonCourseButton/buttonCourseButton";
import { colors } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";

export default function Modal(props) {
  const { handleUpdate, dataM, setOpenM, setDataM, openM } = props;

  const [situation, setSituation] = useState(0);

  useEffect(() => {
    if (dataM.state === "") {
      setSituation(3);
    } else {
      setSituation(() => (dataM.state === "passed" ? 1 : 2));
    }
  }, [dataM]);

  const handleChange = (sit) => {
    setSituation(sit);
  };

  return (
    <div>
      <div className={openM !== 0 ? "modal open" : "modal"}>
        <div className="modal-content">
          <h1
            className="text-center my-5 font-bold"
            style={{ fontSize: "32px" }}
          >
            {dataM.name}
          </h1>
          <div className="flex justify-center gap-2 items-center">
            <InfoIcon sx={{ color: colors.blue[400] }} />
            <p style={{ color: colors.grey[500] }}>
              Selecciona una de las tres opciones que indiquen tu situacion con
              la unidad de aprendizaje
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <ButtonCourseButton
              action={"passed"}
              activate={situation === 1 ? true : false}
              handleChange={handleChange}
            />
            <ButtonCourseButton
              action={"no-passed"}
              activate={situation === 2 ? true : false}
              handleChange={handleChange}
            />
            <ButtonCourseButton
              activate={situation === 3 ? true : false}
              handleChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-4">
            <ButtonOutline
              text="Cancelar"
              fun={() => {
                setOpenM(0);
                setDataM({});
              }}
            />
            <Button text="Guardar" fun={handleUpdate} value={dataM} />
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleUpdate: PropTypes.func,
  setOpenM: PropTypes.func,
  setDataM: PropTypes.func,
  dataM: PropTypes.object,
  openM: PropTypes.number,
};

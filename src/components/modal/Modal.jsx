import PropTypes from "prop-types";
import "./modal.css";

import Button, { ButtonOutline } from "../button/button";

export default function Modal(props) {
  const { handleUpdate, dataM, setOpenM, setDataM, openM } = props;

  return (
    <div>
      <div className={openM !== 0 ? "modal open" : "modal"}>
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <p>Some text in the Modal..</p>
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
  openM: PropTypes.number
};

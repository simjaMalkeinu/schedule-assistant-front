import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import Checkbox from "../checkbox/checkbox";

import { culturalAct } from "../../utils/culturalAct.js";
import { sportAct } from "../../utils/sportAct.js";

import SelectPre from "../selectPre/SelectPre.jsx";

export default function Preferences(props) {
  const { handleUpdate, preferences, ss_state, pp_state } = props;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {}, [preferences]);

  const cargaUpdate = (valor) => {
    handleUpdate({ ...preferences, carga: valor });
  };

  const turnoUpdate = (valor) => {
    handleUpdate({ ...preferences, turno: valor });
  };

  const spotUpdate = (cultural_act) => {
    handleUpdate({ ...preferences, cultural_act});
  };
  const culUpdate = (deportive_act) => {
    handleUpdate({ ...preferences, deportive_act});
  };

  return (
    <div>
      {/* Modal Trigger */}
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Preferences
        <EditIcon />
      </button>

      {/* Modal Structure */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setModalOpen(false)}
          ></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-1/2 max-h-90 overflow-y-auto">
            <h4 className="text-xl font-bold mb-4">Preferencias</h4>
            <div>
              <label>Carga de materias</label>
              <div className="flex">
                <Checkbox
                  text={"Carga mínima"}
                  id="1"
                  valor={6}
                  update={cargaUpdate}
                  dato={preferences.carga}
                />
                <Checkbox
                  text={"Carga media"}
                  id="2"
                  valor={8}
                  update={cargaUpdate}
                  dato={preferences.carga}
                />
                <Checkbox
                  text={"Carga máxima"}
                  id="3"
                  valor={11}
                  update={cargaUpdate}
                  dato={preferences.carga}
                />
              </div>
            </div>
            <div className="mt-4">
              <label>Turno</label>
              <div className="flex">
                <Checkbox text={"Matutino"} id="4" valor={"M"} update={turnoUpdate} dato={preferences.turno} />
                <Checkbox text={"Vespertino"} id="5" valor={"V"} update={turnoUpdate} dato={preferences.turno} />
                <Checkbox text={"Mixto"} id="6" valor={"MX"} update={turnoUpdate} dato={preferences.turno} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-4">
              <SelectPre data={sportAct}  handleUpdate={culUpdate}/>
              <SelectPre data={culturalAct}  handleUpdate={sportAct}/>
            </div>
            <div className="mt-4">
              <label>Hora libre</label>
              <div className="flex space-x-2">
                <input type="text" className="browser-default" value="00:00" />
                <span>a</span>
                <input type="text" className="browser-default" value="00:00" />
              </div>
            </div>

            {ss_state ? (
              <div className="mt-4">
                <label>Servicio social</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="browser-default"
                    value="00:00"
                  />
                  <span>a</span>
                  <input
                    type="text"
                    className="browser-default"
                    value="00:00"
                  />
                </div>
              </div>
            ) : null}

            {pp_state ? (
              <div className="mt-4">
                <label>Practicas profesionales</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="browser-default"
                    value="00:00"
                  />
                  <span>a</span>
                  <input
                    type="text"
                    className="browser-default"
                    value="00:00"
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-4">
              <label>Horario de trabajo</label>
              <div className="flex space-x-2">
                <input type="text" className="browser-default" value="00:00" />
                <span>a</span>
                <input type="text" className="browser-default" value="00:00" />
              </div>
            </div>

            <div className="mt-4">
              <p>No cumples los requisitos para aplicar a lo siguiente:</p>
              <ul>
                {!ss_state ? (
                  <li className="text-yellow-600">Servicio social</li>
                ) : null}
                {!pp_state ? (
                  <li className="text-yellow-600">Prácticas profesionales</li>
                ) : null}
              </ul>
            </div>
            <div className="modal-footer mt-4">
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Preferences.propTypes = {
  // courses: PropTypes.array,
  handleUpdate: PropTypes.func,
  preferences: PropTypes.array,
  ss_state: PropTypes.bool,
  pp_state: PropTypes.bool,
};

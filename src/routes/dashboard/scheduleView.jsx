import HeadCell from "../../components/schedule/HeadCell";
import SignatureRow from "../../components/schedule/SignatureRow";
import Button from "../../components/button/button";
import Donwload from "../../components/icons/Donwload";
import PropTypes from "prop-types";

export default function ScheduleView(props) {
  const { horarios, list } = props;

  return (
    <>
      {/* <aside className="hidden lg:block w-[300px]">
        <Sidebar />
      </aside> */}
      <h1 className="text-center text-3xl font-bold">HORARIO</h1>
      <section className="flex justify-end py-4">
        <Button text="Descargar" icon={<Donwload />} />
      </section>
      <section className="overflow-x-scroll">
        {horarios.map((h, i) => {
          return (
            <>
              <h1 style={{ fontSize: "32px" }}>Propuesta {i + 1}</h1>
              <table
                className="border-collapse border-2 border-[#00393F] table-auto mb-8"
                key={"Horario-" + i}
              >
                <thead>
                  <tr className="h-[48px] text-xl">
                    <HeadCell title="Prioridad" width="min-w-[122px]" />
                    <HeadCell title="Secuencia" width="min-w-[123px]" />
                    <HeadCell title="Materia" width="min-w-[230px]" />
                    <HeadCell title="Profesor" width="min-w-[150px]" />
                    <HeadCell title="Lunes" width="min-w-20" />
                    <HeadCell title="Martes" width="min-w-20" />
                    <HeadCell title="Miercoles" width="min-w-20" />
                    <HeadCell title="Jueves" width="min-w-20" />
                    <HeadCell title="Viernes" width="min-w-20" />
                  </tr>
                </thead>
                <tbody>
                  {h.map((item, key) => {

                    const priority = list.prioritary.includes(
                      item.course_idCourse
                    )
                      ? "alta"
                      : "baja";

                    return (
                      <SignatureRow
                        priority={priority}
                        sequence={item.group}
                        subject={item.asignatura}
                        teacher={item.profesor}
                        monday={
                          item.monday[0] !== ""
                            ? item.monday[0] + "-" + item.monday[1]
                            : ""
                        }
                        tuesday={
                          item.tuesday[0] !== ""
                            ? item.tuesday[0] + "-" + item.tuesday[1]
                            : ""
                        }
                        wednesday={
                          item.wednesday[0] !== ""
                            ? item.wednesday[0] + "-" + item.wednesday[1]
                            : ""
                        }
                        thursday={
                          item.thursday[0] !== ""
                            ? item.thursday[0] + "-" + item.thursday[1]
                            : ""
                        }
                        friday={
                          item.friday[0] !== ""
                            ? item.friday[0] + "-" + item.friday[1]
                            : ""
                        }
                        key={"curso-" + i + "-" + key}
                      />
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })}
      </section>
    </>
  );
}

ScheduleView.propTypes = {
  horarios: PropTypes.array,
  list: PropTypes.object,
};

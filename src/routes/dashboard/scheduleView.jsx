import Sidebar from "../../components/sidebar/sidebar";
import HeadCell from "../../components/schedule/HeadCell";
import SignatureRow from "../../components/schedule/SignatureRow";
import Button from "../../components/button/button";
import Donwload from "../../components/icons/Donwload";
import { schedules } from "../../utils/pruebaHorario";

export default function ScheduleView() {
  return (
    <>
      <aside className="hidden lg:block w-[300px]">
        <Sidebar />
      </aside>
      <main className="w-full h-full p-[20px_5%] xl:pb-8 overflow-auto">
        <h1 className="text-center text-3xl font-bold md:pb-10 lg:pb-24 pb-5">
          HORARIO
        </h1>
        <section className="flex justify-end py-4">
          <Button text="Descargar" icon={<Donwload />} />
        </section>
        <section className="flex flex-col gap-5">
          {schedules.map((schedule, i) => {
            return (
              <>
                <p className="font-bold pt-3">{`Opción de Horario ${i + 1}`}</p>
                <section
                  key={`Option ${i + 1}`}
                  className="overflow-x-scroll 2xl:overflow-x-auto flex flex-col 2xl:justify-center"
                >
                  <table className="border-collapse border-2 border-[#00393F] table-auto">
                    <thead>
                      <tr className="h-[48px] text-xl">
                        <HeadCell title="Prioridad" width="min-w-[120px]" />
                        <HeadCell title="Secuencia" width="min-w-[120px]" />
                        <HeadCell
                          title="Materia"
                          width="max-w-[230px] min-w-[200px]"
                        />
                        <HeadCell
                          title="Profesor"
                          width="max-w-[200px] min-w-[160px]"
                        />
                        <HeadCell title="Lunes" width="min-w-20" />
                        <HeadCell title="Martes" width="min-w-20" />
                        <HeadCell title="Miercoles" width="min-w-20" />
                        <HeadCell title="Jueves" width="min-w-20" />
                        <HeadCell title="Viernes" width="min-w-20" />
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((materia) => {
                        return (
                          <SignatureRow
                            key={materia.idschedule}
                            priority="alta"
                            sequence={materia.group}
                            subject={materia.asignatura}
                            teacher={materia.profesor}
                            monday={materia.monday}
                            tuesday={materia.tuesday}
                            wednesday={materia.wednesday}
                            thursday={materia.thursday}
                            friday={materia.friday}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </section>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

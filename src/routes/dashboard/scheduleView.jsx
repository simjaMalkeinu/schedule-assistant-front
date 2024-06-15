import Sidebar from "../../components/sidebar/sidebar";
import HeadCell from "../../components/schedule/HeadCell";
import SignatureRow from "../../components/schedule/SignatureRow";
import Button from "../../components/button/button";
import Donwload from "../../components/icons/Donwload";

export default function ScheduleView() {
  return (
    <>
      <aside className="hidden lg:block w-[300px]">
        <Sidebar />
      </aside>
      <main className="w-full h-full p-[20px_5%] overflow-auto">
        <h1 className="text-center text-3xl font-bold md:pb-10 lg:pb-24 pb-5">
          HORARIO
        </h1>
        <section className="flex justify-end py-4">
          <Button text="Descargar" icon={<Donwload />} />
        </section>
        <section className="overflow-x-scroll">
          <table className="border-collapse border-2 border-[#00393F] table-auto">
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
              <SignatureRow
                priority="alta"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
              <SignatureRow
                priority="baja"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
              <SignatureRow
                priority="baja"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
              <SignatureRow
                priority="alta"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
              <SignatureRow
                priority="baja"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
              <SignatureRow
                priority="alta"
                sequence="3NM30"
                subject="DISEÑO DE INTERFACES DE USUARIO"
                teacher="GOMEZ ARAGON LAURA ANGELICA"
                monday="13:00-14:00"
                tuesday=""
                wednesday="13:00-15:00"
                thursday=""
                friday="13:00-14:00"
              />
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

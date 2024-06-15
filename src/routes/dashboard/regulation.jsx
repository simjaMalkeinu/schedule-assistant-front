import SideBar from "../../components/sidebar/sidebar";
import Situations from "../../components/situations/situations";
import Container from "../../components/regulation/Container";

export default function Regulation() {
  return (
    <>
      <aside className="hidden lg:block w-[300px]">
        <SideBar />
      </aside>
      <main className="w-full overflow-scroll p-[20px_5%]">
        <h1 className="text-center text-3xl font-bold md:pb-10 lg:pb-24 pb-5">
          REGLAMENTO PARA INSCRIPCIÓN
        </h1>
        <section className="flex flex-wrap sm:flex-row gap-x-3 py-4">
          <Situations situationType={"Regulary"} />
          <Situations situationType={"No Regulary"} />
          <Situations situationType={"Dictaminary"} />
        </section>
        <section className="flex flex-col gap-5">
          <Container title="Reglamento del IPN." />
          <Container title="Procedimientos." />
          <Container title="Consideraciones." />
        </section>
      </main>
    </>
  );
}

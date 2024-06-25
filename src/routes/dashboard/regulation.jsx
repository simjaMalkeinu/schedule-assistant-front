import { useState } from "react";
import SideBar from "../../components/sidebar/sidebar";
import Situations from "../../components/situations/situations";
import ContainerReglamento from "../../components/regulation/ContainerReglamento";
import Container from "../../components/regulation/Container";
import { data } from "../../utils/regulation";

export default function Regulation() {
  const [situation, setSituation] = useState("REGULAR");
  console.log(situation);
  const handleSituation = (situationSelected) => {
    setSituation(situationSelected);
  };
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
          <button onClick={() => handleSituation("REGULAR")}>
            <Situations situationType={"REGULAR"} />
          </button>
          <button onClick={() => handleSituation("IRREGULAR")}>
            <Situations situationType={"IRREGULAR"} />
          </button>
          <button onClick={() => handleSituation("DICTAMEN")}>
            <Situations situationType={"DICTAMEN"} />
          </button>
        </section>
        <section>
          {situation === "REGULAR" && (
            <div className="flex flex-col gap-7">
              <ContainerReglamento
                title="Reglamento del IPN."
                content={data.REGULAR.reglamento}
              />
              <Container
                title="Procedimientos."
                content={data.REGULAR.procedimientos}
              />
              <Container
                title="Consideraciones."
                content={data.REGULAR.consideraciones}
              />
            </div>
          )}
          {situation === "IRREGULAR" && (
            <div className="flex flex-col gap-7">
              <ContainerReglamento
                title="Reglamento del IPN."
                content={data.IRREGULAR.reglamento}
              />
              <Container
                title="Procedimientos."
                content={data.IRREGULAR.procedimientos}
              />
              <Container
                title="Consideraciones."
                content={data.IRREGULAR.consideraciones}
              />
            </div>
          )}
          {situation === "DICTAMEN" && (
            <div className="flex flex-col gap-7">
              <ContainerReglamento
                title="Reglamento del IPN."
                content={data.DICTAMEN.reglamento}
              />
              <Container
                title="Procedimientos."
                content={data.DICTAMEN.procedimientos}
              />
              <Container
                title="Consideraciones."
                content={data.DICTAMEN.consideraciones}
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
}

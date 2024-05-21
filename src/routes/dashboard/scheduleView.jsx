import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

export default function ScheduleView() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-[95%] items-center">
        <div className="w-5/6 h-1/4"></div>
        <div className="w-5/6 h-2/4 flex items-center justify-center">
          <div className="flex flex-col"></div>
          <table className="border-collapse border-2 border-[#00393F] table-auto">
            <thead>
              <tr className="h-[48px] text-xl">
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-[122px]">
                  Prioridad
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-[123px]">
                  Secuencia
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-[230px]">
                  Materia
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-[150px]">
                  Profesor
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-20">
                  Lunes
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-20">
                  Martes
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-20">
                  Miercoles
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-20">
                  Jueves
                </th>
                <th className="border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white w-20">
                  Viernes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[58px] border-collapse border-2 border-[#00393F] text-sm text-center font-normal">
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  <div className="rounded-full bg-red-700 w-[31px] h-[31px]"></div>
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  3NM30
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  DISEÑO DE INTERFACES DE USUARIO
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  GOMEZ ARAGON LAURA ANGELICA
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]"></td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  13:00-14:00
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]"></td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]">
                  13:00-15:00
                </td>
                <td className="border-collapse border-2 border-[#00393F] text-[#00393F]"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

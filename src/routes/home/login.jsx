import React from "react";

export default function Register() {
  return (
    <>
      <div className="min-h-full">
        <div className="absolute w-full min-h-full bg-img-bg bg-center bg-no-repeat bg-cover"></div>
        <div className="absolute lg:right-0 lg:w-1/2 w-full min-h-full bg-[#FFFFFF40] flex flex-col justify-center items-center lg:p-5 gap-[50px] shadow-custom backdrop-blur">
          <h2 className="text-center text-white font-bold text-[42px]">
            Inicio de Sesion
          </h2>
          <div className="bg-no-repeat bg-img-person bg-contain w-[166.81px] h-[158.87px]"></div>
          <form className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[80%] flex flex-col justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Boleta"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] py-2.5 px-5 rounded-lg bg-[#D9D9D9BF] border text-[22.78px] text-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] py-2.5 px-5 rounded-lg bg-[#D9D9D9BF] border text-[22.78px] text-black focus:outline-none"
            />
            <button
              id="register-btn"
              type="submit"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] rounded-lg border-none bg-[#00393F] text-white text-[22.78px] font-bold"
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

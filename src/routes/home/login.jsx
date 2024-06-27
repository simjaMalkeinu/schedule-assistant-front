import { colors } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [boleta, setBoleta] = useState(0);
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setBoleta(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    document.getElementById("errors").innerHTML = "";
    document.getElementById("errors").hidden = true;

    axios
      .post("http://localhost:3000/users/login", { boleta, password })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.user));
        location.href = "/app"
      })
      .catch((e) => {
        console.log(e.response.data.message);
        document.getElementById("errors").innerHTML = e.response.data.message;
        document.getElementById("errors").hidden = false;
      });
  };

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
            <p
              id="errors"
              style={{
                color: colors.white,
                fontWeight: "bold",
                width: "100%",
                borderRadius: "10px",
              }}
              className="bg-red-500 p-4"
              hidden
            ></p>

            <input
              type="text"
              placeholder="Boleta"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] py-2.5 px-5 rounded-lg bg-[#D9D9D9BF] border text-[22.78px] text-black focus:outline-none"
              id="boleta"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] py-2.5 px-5 rounded-lg bg-[#D9D9D9BF] border text-[22.78px] text-black focus:outline-none"
              id="password"
              onChange={handlePassword}
            />
            <button
              id="register-btn"
              type="submit"
              className="w-[70%] lg:w-[90%] xl:w-[70%] h-[70px] rounded-lg border-none bg-[#00393F] text-white text-[22.78px] font-bold"
              onClick={login}
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

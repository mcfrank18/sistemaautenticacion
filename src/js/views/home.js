import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const { store, actions } = useContext(Context);
  return (

	
    <div className="text-center mt-5">
      <button type="button" class="btn btn-success">
        <h2>Ingresa Tus Datos</h2>
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.enviarDatos(e, mail, pass);
        }}
      >
        <br></br>
        <div className="mb-3 mx-auto col-6">
          <a>Correo Electrónico</a>
          <br></br>
		  <br></br>
		  

          <input
            type="email"
            placeholder="Sus Datos Seran Privados"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3  mx-auto col-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <br></br>
        </div>
      </form>
      <div className="mb-3  mx-auto col-6">
        <div className="input-group">
          <input
            type="password"
            className="form-control"
            placeholder="Introducir Clave"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button className="btn btn-primary" type="button" id="button-addon2">
            Click
          </button>
        </div>
      </div>
      <Link to="/demo">
        <button className="btn btn-info">Registrado</button>
      </Link>
    </div>
  );
};

import React, { useState } from "react";
import logo from "../images/turistando-logo.png";
import gif from "../images/gif-viagem.gif";

function Login({ userId }) {
    return (
      <div>
        <center>
        <img src={logo} alt="Logo do Turistando" width="15%"/>
        <h2>Boas vindas ao Turistando, {userId}!</h2>
        <p>Aguarde um momento, estamos personalizando a sua experiência!</p>
        <img src={gif} alt="Gif de Viagem" width="20%"/>
        </center>
      </div>
    );
}

export default Login;
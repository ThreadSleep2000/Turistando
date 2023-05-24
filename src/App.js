// CENTRO UNIVERSITARIO SENAC - PROGRAMAÇÃO WEB - TURISTANDO

import Login from "./components/Login";
import logo from "./images/turistando-logo.png";
import React, { useState } from "react";

function App() {
  // Cria as variáveis que armazenam os dados e as inicializa com useState
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  // Cria a função que irá lidar com o botão Entrar, validando os dados informados no formulário para permitir acesso à próxima página
  const handleEntrar = (event) => {
    event.preventDefault();
    if (usuario === "teste" && senha === "teste") {
      setLogado(true);
    }
  };

  // Se os dados estiverem corretos, logado = true irá chamar o componente Login e passará o usuário informado como propriedade
  if (logado) {
    return <Login userId={usuario} />;
  }

  /*  Cria o formulário com os campos que serão validados por handleEntrar;
      Adiciona também alguns comandos CSS para que os itens sejam centralizados na tela 
      ----------
      Em resumo, o componente App utiliza o hook useState para armazenar o estado das variáveis "usuario", "senha" e "logado".

      "setUsuario" e "setSenha" são usados para atualizar o estado do componente "App" sempre que o valor dos campos de entrada de "Usuário" e "Senha" mudam.
      
      Quando o botão "Entrar" é pressionado, a função "handleEntrar" verifica se "usuario" e "senha" correspondem ao valores esperados. Caso seja bem sucedida, a variável "logado" é alterada para "true" usando o método "setLogado".
      
      Se "logado" é "true", o componente "Login" é chamado e a propriedade "userId" é definida como o valor presente na variável "usuario".*/
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img src={logo} alt="Logo do Turistando" width="15%" />
      <form onSubmit={handleEntrar} style={{ paddingTop: "1rem" }}>
        <h4 style={{ marginBottom: "1rem" }}>Por favor, informe seus dados de acesso.</h4>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label style={{ width: "10rem" }}>
            <b><i>Usuário</i></b>
            <input type="text" value={usuario} placeholder="Insira aqui seu usuário" onChange={(e) => setUsuario(e.target.value)} />
          </label>
          <br />
          <label style={{ width: "10rem" }}>
            <b><i>Senha</i></b>
            <input type="password" value={senha} placeholder="Insira aqui sua senha" onChange={(e) => setSenha(e.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
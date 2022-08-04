import httpClient from "./httpClient";
import loginForm from "./loginFormClass";

interface IResponse {
  session_id?: string;
  request_token?: string;
}

class LoginClass {
  requestToken: string;
  sessionId: string;
  result: IResponse;

  async criarSessao() {
    console.log("criar sessao chamado");
    let result: IResponse = await httpClient.get({
      url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${loginForm.apiKey.value}&request_token=${this.requestToken}`,
      method: "GET",
    });
    this.sessionId = result.session_id;
    console.log(result);
  }

  async logar() {
    console.log("logar chamado");
    let result = await httpClient.get({
      url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${loginForm.apiKey.value}`,
      method: "POST",
      body: {
        username: `${loginForm.username.value}`,
        password: `${loginForm.password.value}`,
        request_token: `${this.requestToken}`,
      },
    });
    console.log(result);
  }

  async criarRequestToken() {
    console.log("chamado"); 
    let result: IResponse = await httpClient.get({
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${loginForm.apiKey.value}`,
      method: "GET",
    });
    console.log(result); 
    this.requestToken = result.request_token;
    console.log(this.requestToken);
  }
}

const login = new LoginClass();
export default login;

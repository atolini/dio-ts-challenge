class LoginForm {
  password = document.getElementById("senha") as HTMLInputElement;
  username = document.getElementById("login") as HTMLInputElement;
  apiKey = document.getElementById("api-key") as HTMLInputElement;
  loginButton = document.getElementById("login-button") as HTMLButtonElement;
  mensagem = document.getElementById("mensagem") as HTMLDivElement; 
  textNode; 

  validateLoginButton() {
    if (this.password.value && this.username.value && this.apiKey.value) {
      this.loginButton.disabled = false;
    } else {
      this.loginButton.disabled = true;
    }
  }

  createMessage(text: string) { 
    if (!this.textNode) {
      this.textNode = document.createTextNode(text);
      this.mensagem.appendChild(this.textNode);
    } else {
      this.mensagem.removeChild(this.textNode); 
      this.textNode = document.createTextNode(text);
      this.mensagem.appendChild(this.textNode);
    }
  }
}

const loginForm = new LoginForm();
export default loginForm;

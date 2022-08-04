import httpClient from "./httpClient";
import loginForm from "./loginFormClass";

type Response = any;

class Movie {
  searchButton = document.getElementById("search-button") as HTMLButtonElement;
  searchContainer = document.getElementById('search-container') as HTMLDivElement;

  async procurarFilme(query: string) {
    query = encodeURI(query);
    console.log(query);
    let result: Response = await httpClient.get({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${loginForm.apiKey.value}&query=${query}`,
      method: "GET",
    });
    console.log(result);
    return result;
  }

  async adicionarFilme(filmeId) {
    let result = await httpClient.get({
      url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${loginForm.apiKey.value}&language=en-US`,
      method: "GET"
    })
    console.log(result);
  }
}

const movie = new Movie();
export default movie;

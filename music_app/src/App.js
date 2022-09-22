import "./App.css";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "25b9223b8emsh4c5dfe50b3d39ecp1d4e53jsn66cd82091764",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };

  fetch("https://youtube-music1.p.rapidapi.com/v2/search?query=eminem", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;

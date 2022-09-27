import React, { useEffect } from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";

function App() {
  const [musicList, setMusicList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "25b9223b8emsh4c5dfe50b3d39ecp1d4e53jsn66cd82091764",
        "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      },
    };

    fetch(
      "https://youtube-music1.p.rapidapi.com/v2/search?query=eminem",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMusicList(data);
      });
  }, [musicList]);

  return (
    <div className="App">
      <h1>Music List</h1>
      <h1>{musicList.songs}</h1>
      {console.log(musicList)}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          {musicList.map((eachMusic) => {
            return (
              <div>
                <Card.Title>{eachMusic.songs.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
            );
          })}
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default App;

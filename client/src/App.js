import React, { useEffect } from "react";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  const [musicList, setMusicList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/songs")
      .then((response) => response.json())
      .then((data) => {
        setMusicList(data);
      });
  }, []);

  return (
    <div>
      <h1>Music List</h1>
      <div className="App">
        {musicList.map((eachMusic) => (
          <Container>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={eachMusic.thumbNail} />
              <AudioPlayer
                autoPlay
                src={eachMusic.audioUrl}
                onPlay={(e) => console.log("onPlay")}
              />
              <Card.Body>
                <div>
                  <Card.Title>{eachMusic.songName}</Card.Title>
                  <Card.Text>{eachMusic.movieName}</Card.Text>
                  <Card.Text>{eachMusic.singer[0]}</Card.Text>
                  <Card.Text>{eachMusic.singer[1]}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default App;

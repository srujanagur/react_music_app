import React, { useEffect } from "react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import useSelector from "rect-redux";

import Card from "react-bootstrap/Card";

export default function Songs() {
  const songsSlice = useSelector((state) => state.songs);

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
        {musicList.map((eachMusic) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={eachMusic.thumbNail} />
              <ReactAudioPlayer src={eachMusic.audioUrl} autoPlay controls />
              <Card.Body>
                <div>
                  <Card.Title>{eachMusic.songName}</Card.Title>
                  <Card.Text>{eachMusic.movieName}</Card.Text>
                  <Card.Text>{eachMusic.singer}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchSongs } from "../../redux/Actions/songsListAction";
import { addToWhishlist } from "../../redux/Actions/songsListAction";

import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";

import Card from "react-bootstrap/Card";
import { BsSuitHeartFill } from "react-icons/bs";

import "./MusicList.css";

export default function MusicList() {
  const finalSongsList = useSelector((state) =>
    state.songsReducer.keyword
      ? state.songsReducer.filteredData
      : state.songsReducer.songs
  );
  const { whishlist } = useSelector((state) => state.songsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="songlist">
        {finalSongsList.map((eachMusic) => (
          <div className="each">
            <Card>
              <Card.Img
                className="songlistimage"
                variant="top"
                src={eachMusic.thumbNail}
              />
              <AudioPlayer
                autoPlay
                src={eachMusic.audioUrl}
                //onPlay={(e) => console.log("onPlay")}
              />
              <Card.Body>
                <div>
                  <Card.Title>{eachMusic.songName}</Card.Title>
                  {eachMusic.movieName}
                  <br />
                  {eachMusic.singer[0]}
                  <br />
                  {eachMusic.singer[1]}
                </div>
              </Card.Body>
              {/* <button
                type="button"
                className="cartbtn"
                disabled={whishlist
                  .map((eachMusic) => console.log(eachMusic.songName))
                  .includes(eachMusic.songName)}
                onClick={() => dispatch(addToWhishlist(eachMusic))}
              >
                AddToFavourites <BsSuitHeartFill className="heart" />
              </button> */}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

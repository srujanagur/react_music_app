import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteFromWhishList } from "../../redux/Actions/songsListAction";

export default function WhishList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const whishlist = useSelector((state) => state.songsReducer);
  console.log("from whishlist" + JSON.stringify(whishlist));
  return (
    <div className="whishlist">
      {whishlist.songs.map((song) => {
        return (
          <div className="whishlisteach">
            <h5>{song.songName}</h5>
            <div>
              <img className="songlistimage" src={song.thumbNail} alt="..." />
            </div>
            <Button
              className="whishlistbtn"
              variant="success"
              onClick={() => dispatch(deleteFromWhishList(song))}
            >
              Remove
            </Button>
            <Button
              className="whishlistbtn"
              variant="success"
              onClick={() => navigate("/songslist")}
            >
              Back
            </Button>
          </div>
        );
      })}
    </div>
  );
}

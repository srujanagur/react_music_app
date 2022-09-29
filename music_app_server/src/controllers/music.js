import { Request, Response, NextFunction } from "express";

import Song from "../models/song";
import SongService from "../services/music";
import { BadRequestError } from "../helpers/apiError";

// POST /songs
export const createSong = async (req, res, next) => {
  try {
    const { songName, movieName, singer, duration, thumbNail, audioUrl } =
      req.body;

    const song = new Song({
      songName,
      movieName,
      singer,
      duration,
      thumbNail,
      audioUrl,
    });

    await SongService.create(song);
    res.json(song);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// PUT /songs/:songId
export const updateSong = async (req, res, next) => {
  try {
    const update = req.body;
    const songId = req.params.songId;
    const updatedSong = await SongService.update(songId, update);
    res.json(updatedSong);
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// DELETE /songs/:songId
export const deleteSong = async (req, res, next) => {
  try {
    await SongService.deleteSong(req.params.songId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /songs/:songId
export const findById = async (req, res, next) => {
  try {
    res.json(await SongService.findById(req.params.songId));
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /songs
export const findAll = async (req, res, next) => {
  try {
    res.json(await SongService.findAll());
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

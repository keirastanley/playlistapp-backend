import express from "express";
import { getAllPlaylists } from "../services/playlists.js";
// import {getPlaylists, getPlaylistById, addNewPlaylist, editPlaylist, deletePlaylist} from "../services/playlists.js"

const playlistsRouter = express.Router();

playlistsRouter.get("/", async (req, res) => {
    try {
      const playlists = await getAllPlaylists();
      res.send({ success: true, payload: playlists });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// playlistsRouter.get("/:id", async function (req, res) {
//     const result = await getPlaylistById(req.params.id);
//     res.json({success: true, payload: result})
// })

// playlistsRouter.post("/", async function (req, res) {
//     const result = await addNewPlaylist(req.body);
//     res.json({success: true, payload: result})
// })

// playlistsRouter.patch("/:id", async function (req, res) {
//     const result = await editPlaylist(req.params.id, req.body);
//     res.json({success: true, payload: result})
// })

// playlistsRouter.delete("/:id", async function (req, res) {
//     const result = await deletePlaylist(req.params.id);
//     res.json({success: true, payload: result})
// })

export default playlistsRouter;
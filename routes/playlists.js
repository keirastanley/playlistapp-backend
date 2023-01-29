import express from "express";
import {getPlaylists, getPlaylistById, addNewPlaylist, editPlaylist, deletePlaylist} from "../services/playlists.js"

const playlistsRouter = express.Router();

playlistsRouter.get("/", async function (req, res) {
    const result = await getPlaylists();
    res.json({success: true, payload: result})
})

playlistsRouter.get("/:id", async function (req, res) {
    const result = await getPlaylistById(req.params.id);
    res.json({success: true, payload: result})
})

playlistsRouter.post("/", async function (req, res) {
    const result = await addNewPlaylist(req.body);
    res.json({success: true, payload: result})
})

playlistsRouter.patch("/:id", async function (req, res) {
    const result = await editPlaylist(req.params.id, req.body);
    res.json({success: true, payload: result})
})

playlistsRouter.delete("/:id", async function (req, res) {
    const result = await deletePlaylist(req.params.id);
    res.json({success: true, payload: result})
})

export default playlistsRouter;
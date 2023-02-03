import express from "express";
import { getAllPlaylists, getPlaylistById, addNewPlaylist, addTracksToPlaylist, editPlaylistDetails, deletePlaylist} from "../services/playlists.js";

const playlistsRouter = express.Router();

playlistsRouter.get("/", async (req, res) => {
    try {
      const playlists = await getAllPlaylists();
      res.send({ success: true, payload: playlists });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

playlistsRouter.get("/:id", async (req, res) => {
    try { 
        const playlists = await getPlaylistById(req.params.id);
        res.send({ success: true, payload: playlists });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

playlistsRouter.post("/", async (req, res) => {
    try { 
        const result = await addNewPlaylist(req.body);
        res.send({ success: true, payload: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

playlistsRouter.patch("/:id", async (req, res) => {
    if (req.query.action === "track") {
        try { 
            const result = await addTracksToPlaylist(req.params.id, req.body);
            res.send({ success: true, payload: result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    else {
        try { 
            const result = await editPlaylistDetails(req.params.id, req.body);
            res.send({ success: true, payload: result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
})

playlistsRouter.delete("/:id", async (req, res) => {
    try { 
        const result = await deletePlaylist(req.params.id);
        res.send({ success: true, payload: result });
        } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default playlistsRouter;
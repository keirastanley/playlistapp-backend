import express from "express";
import { getAllPlaylists, getPlaylistById, addNewPlaylist, addTrackToPlaylist, deleteTrackFromPlaylist, editPlaylistDetails, deletePlaylist, addComment, removeAccessUser, addAccessUser, removeComment } from "../services/playlists.js";

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
  if (req.query.action === "add-track") {
    try {
      const result = await addTrackToPlaylist(req.params.id, req.body);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "delete-track") {
    try {
      const result = await deleteTrackFromPlaylist(req.params.id, req.body);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "update-playlist") {
    try {
      const result = await editPlaylistDetails(req.params.id, req.body);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "add-comment") {
    try {
      const result = await addComment(req.params.id, req.body[0].track_id, req.body[1]);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "remove-comment") {
    try {
      const result = await removeComment(req.params.id, req.body.track_id, req.body.comment_id);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "add-access") {
    try {
      const result = await addAccessUser(req.params.id, req.body.user_id);
      res.send({ success: true, payload: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  if (req.query.action === "remove-access") {
    try {
      const result = await removeAccessUser(req.params.id, req.body.user_id);
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
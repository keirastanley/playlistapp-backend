import { playlistsData } from "../app.js";
import { ObjectId } from "mongodb";

export async function getAllPlaylists() {
    const data = await playlistsData.find({}).toArray();
    return data;
}

export async function getPlaylistById(id){
    const playlist = await playlistsData.find({_id: new ObjectId(`${id}`)}).toArray();
    return playlist;
}

export async function addNewPlaylist(playlist){
    await playlistsData.insertOne(playlist)
    return playlist;
}

export async function addTracksToPlaylist(id, track){
    const update = { $addToSet: { tracks: track } }
    await playlistsData.updateOne({ _id: new ObjectId(`${id}`)}, update)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${id}`)}).toArray();
    return editedPlaylist;
}

export async function editPlaylistDetails(id, update) {
    const playlistUpdate = {$set: update}
    await playlistsData.updateOne({ _id: new ObjectId(`${id}`)}, playlistUpdate)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${id}`)}).toArray();
    return editedPlaylist;
}

export async function deletePlaylist(id){
    await playlistsData.deleteOne({_id: new ObjectId(`${id}`)})
    return `Playlist with id ${id} deleted`;
}
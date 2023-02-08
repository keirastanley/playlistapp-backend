import { playlistsData } from "../app.js";
import { ObjectId } from "mongodb";

export async function getAllPlaylists() {
    const data = await playlistsData.find({}).toArray();
    return data;
}

export async function getPlaylistById(id) {
    const playlist = await playlistsData.find({ _id: new ObjectId(`${id}`) }).toArray();
    return playlist;
}

export async function addNewPlaylist(playlist) {
    await playlistsData.insertOne(playlist)
    return playlist;
}

export async function addTrackToPlaylist(id, track) {
    const update = { $addToSet: { tracks: track } }
    await playlistsData.updateOne({ _id: new ObjectId(`${id}`) }, update)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${id}`)
    }).toArray();
    return editedPlaylist;
}

export async function addComment(playlist_id, track_id, comment) {
    const test = await playlistsData.findOneAndUpdate({"tracks.id": track_id}, { $addToSet: { "tracks.$.comments": comment }})
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${playlist_id}`)
    }).toArray();
    return editedPlaylist;
}

export async function deleteTrackFromPlaylist(playlist_id, track_id) {
    const update = { $pull: { "tracks": track_id } }
    await playlistsData.updateOne({ _id: new ObjectId(`${playlist_id}`) }, update)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${playlist_id}`)
    }).toArray();
    return editedPlaylist;
}

export async function addAccessUser(playlist_id, user_id) {
    const update = { $addToSet: { "access": user_id } }
    await playlistsData.updateOne({ _id: new ObjectId(`${playlist_id}`) }, update)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${playlist_id}`)
    }).toArray();
    return editedPlaylist;
}

export async function removeAccessUser(playlist_id, user_id) {
    const update = { $pull: { "access": user_id } }
    await playlistsData.updateOne({ _id: new ObjectId(`${playlist_id}`) }, update)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${playlist_id}`)
    }).toArray();
    return editedPlaylist;
}

export async function editPlaylistDetails(id, update) {
    const playlistUpdate = { $set: update }
    await playlistsData.updateOne({ _id: new ObjectId(`${id}`) }, playlistUpdate)
    const editedPlaylist = await playlistsData.find({
        _id: new ObjectId(`${id}`)
    }).toArray();
    return editedPlaylist;
}

export async function deletePlaylist(id) {
    await playlistsData.deleteOne({ _id: new ObjectId(`${id}`) })
    return `Playlist with id ${id} deleted`;
}
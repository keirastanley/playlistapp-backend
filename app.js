import express from "express";
import * as dotenv from 'dotenv';
import playlistsRouter from "./routes/playlists.js";
import { MongoClient } from "mongodb";
import cors from "cors";

dotenv.config()

const uri = process.env.DATABASE_URL;
export const client = new MongoClient(uri);
const database = client.db("cybermix");
export const playlistsData = database.collection("playlists")

const app = express();
const PORT = 3001;

app.use(cors('*'))
app.use(express.json());
app.use('/api/playlists', playlistsRouter);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})



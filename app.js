import express from "express";
import playlistsRouter from "./routes/playlists.js";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors('*'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

app.use('/api/playlists', playlistsRouter);

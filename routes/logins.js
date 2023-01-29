import express from "express"
import {getLogins, getLoginsByUser, addNewLogin} from "../services/logins.js"

const loginsRouter = express.Router();

loginsRouter.get("/", async function (req, res) {
    const result = await getLogins();
    res.json({success: true, payload: result})
})

loginsRouter.get("/user/", async function (req, res) {
    const result = await getLoginsByUser(req.body.user_id);
    res.json({success: true, payload: result})
})

loginsRouter.post("/", async function (req, res) {
    const result = await addNewLogin(req.body.id, req.body.access_token, req.body.date);
    res.json({success: true, payload: result})
})

export default loginsRouter;
import express from "express";
import weatherController from "../controllers/weatherController.js";

const weatherRoutes = express.Router();
weatherRoutes.get('/weather/', weatherController);

export default weatherRoutes;
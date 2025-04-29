import express from "express";
import weatherController from "../controllers/weatherController.js";
import { weatherMiddleWare } from "../middleware/weatherMiddleWare.js";

const weatherRoutes = express.Router();

weatherRoutes.use(weatherMiddleWare);
weatherRoutes.get('/weather/city/:city', weatherController);

export default weatherRoutes;
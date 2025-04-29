import express from "express";
import weatherRoutes from "./routes/weatherRoutes.js";

const weatherApp = express();
weatherApp.use('/api', weatherRoutes);

weatherApp.listen(9000, ()=>{
  console.log('Server is running on port 9000')
})

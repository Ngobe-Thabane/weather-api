import client from "../models/redisClient.js";

export function weatherMiddleWare(req, res, next){
  // const city = req.params;
  console.log(req)
  next()
}
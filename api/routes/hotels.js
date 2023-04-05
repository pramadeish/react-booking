import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin,updateHotel);
//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
//GET
router.get("/find/:id",getHotel);
//GETALL
router.get("/",getAllHotel);
router.get("/count/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);


export default router;
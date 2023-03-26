import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";


const router = express.Router();

//CREATE
router.post("/",createHotel)
//UPDATE
router.put("/:id",updateHotel)
//DELETE
router.delete("/:id",deleteHotel)
//GET
router.get("/:id",getHotel)
//GETALL
router.get("/",getAllHotel)


export default router;
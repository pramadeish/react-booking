import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin,createRoom)
//UPDATE
router.put("/:id",verifyAdmin,updateRoom)
//DELETE
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//GET
router.get("/:id",getRoom)
//GETALL
router.get("/",getAllRoom)
//AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);


export default router;
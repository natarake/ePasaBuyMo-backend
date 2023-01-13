import express from "express";
import Request from "../models/RequestModel.js";
import { verifyToken } from "./verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  const newRequest = new Request(req.body);
  try {
    const savedRequest = await newRequest.save();
    res.status(200).json(savedRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

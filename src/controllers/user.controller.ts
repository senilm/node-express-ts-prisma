import { Request, Response } from "express";
import prisma from "../lib/prisma.js";
import logger from "../lib/logger.js";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        logger.info("Users fetched successfully");
        res.status(200).json([{name: 'hi'}, {name:"bye"}]);
    } catch (error) {
        logger.error("Error fetching users: ", error);
        res.status(500).json({message: "Error fetching users"});
    }
}
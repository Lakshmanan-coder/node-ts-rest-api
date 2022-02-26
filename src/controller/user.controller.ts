import UserModel from "../models/user.model";
import { Request, Response } from "express";

const postUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body);

    return res
      .status(200)
      .json({ status: 200, message: "Success", data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 500, message: "System error" });
  }
};

export default {
  postUser,
};

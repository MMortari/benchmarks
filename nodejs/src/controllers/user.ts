import { Request, Response } from "express";
import UserRepository from "../repositories/user";
import { User } from "../models/user";

export async function listUsers(
  req: Request,
  res: Response
): Promise<Response> {
  const response = await UserRepository.listUsers();

  return res.json(response);
}
export async function getUser(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  const response = await UserRepository.getUser(id);

  if (!response) {
    return res.status(404);
  }

  return res.json(response);
}
export async function createUser(
  req: Request,
  res: Response
): Promise<Response> {
  const user = req.body as User;

  if (!user.name || !user.email) {
    return res.status(400).send("Name and email is required");
  }

  const response = await UserRepository.create(user);

  return res.send(response);
}

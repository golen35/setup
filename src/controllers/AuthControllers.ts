import { Request, Response } from "express"

export class SignugControllers {
    async handle(req: Request, res: Response) {
        res.send("Ola mundo Dev")
    }
}
import { Request, Response, NextFunction } from "express"
import { decodeId } from "../utils/hashids"

export const decodificarId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const decodedId = Number(decodeId(id))

        if (!req.body) req.body = {};
        req.body.id = decodedId;

        next()
    } catch (error: any) {
        console.error(error)
        res.status(500).send({ error: error.message })
    }
}
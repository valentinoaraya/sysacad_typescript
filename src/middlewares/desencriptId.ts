import { Request, Response, NextFunction } from "express"
import { decodeId } from "../utils/hashids"

export const decodificarId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const decodedId = Number(decodeId(id))

    req.body.id = decodedId

    next()
}
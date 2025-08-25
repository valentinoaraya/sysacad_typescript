import dotenv from "dotenv"

dotenv.config()

export const URL_BASE = "/api/v1"
export const SERVER_PORT = process.env.SERVER_PORT
export const SALT_SECRET = process.env.SALT_SECRET
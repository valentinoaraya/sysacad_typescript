import Hashids from "hashids";
import { SALT_SECRET } from "../config/variablesEntorno";

const hashids = new Hashids(SALT_SECRET, 16);

export function encodeId(id: number): string {
    return hashids.encode(id);
}

export function decodeId(hash: string): number {
    const decoded = hashids.decode(hash);
    if (decoded.length === 0) {
        throw new Error("ID inválido");
    }
    return decoded[0] as number;
}
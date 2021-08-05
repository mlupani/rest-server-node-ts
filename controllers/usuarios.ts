import { Request, Response } from "express"
import db from "../database/config"
import Usuario from "../models/usuario"

export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await db.query('SELECT id, nombre FROM usuarios',{
        model: Usuario,
    })

    const users = usuarios.map((val) => val)

    res.json({
        msg: 'getUsuarios',
        users
    })
}

export const postUsuarios = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postUsuarios',
        body
    })
}

export const putUsuarios = (req: Request, res: Response) => {

    const { params:{id} } = req;

    res.json({
        msg: 'putUsuarios',
        id
    })
}

export const deleteUsuarios = (req: Request, res: Response) => {

    const { params:{id} } = req;

    res.json({
        msg: 'deleteUsuarios',
        id
    })
}

export const patchUsuarios = (req: Request, res: Response) => {

    const { params:{id} } = req;

    res.json({
        msg: 'patchUsuarios',
        id
    })
}
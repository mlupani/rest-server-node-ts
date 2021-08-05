import express, { Application } from 'express';
import userRouter from '../routes/usuarios';
import cors from 'cors';
import db from '../database/config';

class Server{

    private app: Application;
    private port: string;
    private paths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8000";

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Base de datos online');
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.usuarios, userRouter );
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Server corriendo en el puerto ${this.port}`)
        });
    }

}

export default Server
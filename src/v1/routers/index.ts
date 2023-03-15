import {Request, Response, Application} from 'express'

export const register = (app: Application) => {
    app.get('/_healthcheck', (req: Request, res: Response) => {
        res.status(200).json({
            now: new Date(),
            uptime: process.uptime()
        });
    });
};

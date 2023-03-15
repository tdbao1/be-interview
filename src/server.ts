import express from 'express';
import cors from 'cors';
import * as routes from './v1/routers';
const app = express();

app.use(express.json());
app.use(cors({
  origin: [process.env.FE_HOST ? process.env.FE_HOST : ''],
  credentials: true
}));

// configure routes
routes.register(app);


export default app;

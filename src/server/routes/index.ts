import * as express from 'express'; //importing express
import apiRouter from './api'; //importing "apiRouter" from ./api folder

const router = express.Router();

router.use('/api', apiRouter); 

export default router;


//THIS FILE SETS UP THE ROUTER FOR /API
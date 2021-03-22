import * as express from 'express'; //importing express
import chirpRouter from './chirps'; //importing chirperRouter from ./chirps file
import userRouter from './users';


const router = express.Router();

router.use('/chirps', chirpRouter);
router.use('/users', userRouter);


export default router;

import * as express from 'express'; //importing express
import * as morgan from 'morgan'; //importing middleware
import * as path from 'path'; //importing middleware
import routes from './routes'; //importing middleware

const app = express();

app.use(morgan('dev')); //middleware
app.use(express.static('public')); //middleware to set the 'public' folder static
app.use(express.json()); //middleware to read json() data
app.use(routes); //middleware using routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html'))); //a "catch all" to for server and client side

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`)); //server listening on port 3000


//THIS FILE CREATES AN EXPRESS SERVER
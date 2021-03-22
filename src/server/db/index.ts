import * as mysql from 'mysql';
import chirps from './chirpQueries'
import users from './userQueries'

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: '',
    database: 'chirpr'
})

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    chirps,
    users
}



//THIS FILE CREATES THE CONNECTION BETWEEN MYSQL DATABASE AND THE SERVER. IT'S ESTABLISHING WHAT 'Query' does.
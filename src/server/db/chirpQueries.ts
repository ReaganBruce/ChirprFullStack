import { Query } from './index'


//GET ALL CHIRPS FROM DATABASE
const getAllChirps = () => Query('SELECT * FROM chirps');

//GET ONE CHIRP FROM DATABASE
const getOneChirp = (id: number) => Query('SELECT * FROM chirps WHERE id =?', [id]);

//CREATE NEW CHIRP FROM DATABASE
const newChirp = (userid: number, content: string, location: string) => Query('INSERT INTO chirps(userid, content, location) VALUES (?, ?, ?)', [userid, content, location]);

//UPDATE CHIRP FROM DATABASE
const updateChirp = (id: number, content: string, location: string) => Query('UPDATE chirps SET content = ?, location = ? WHERE id = ?', [content, location, id]);

//DELETE CHIRP FROM DATABASE
const deleteChirp = (id: number) => Query('DELETE FROM chirps WHERE id =?', [id]); 


export default {
    getAllChirps, 
    getOneChirp,
    newChirp,
    updateChirp,
    deleteChirp
}

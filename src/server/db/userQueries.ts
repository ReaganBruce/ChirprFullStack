import { Query } from './index'


//GET ALL USERS FROM DATABASE
const getAllUsers = () => Query('SELECT * FROM users');

//GET ONE USER FROM DATABASE
const getOneUser = (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);

//CREATING NEW USER FROM DATABASE
const newUser = (id: number, name: string, email: string, password: string) => Query('INSERT INTO users(name, email, password) VALUES (?, ?, ?)', [name, email, password, id]);

//UPDATING USER FROM DATABASE
const updateUser = (id: number, name: string, email: string, password: string) => Query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
// const updateChirp = (id: number, content: string, location: string) => Query('UPDATE chirps SET content = ?, location = ? WHERE id = ?', [content, location, id]);

//DELETE USER FROM DATABASE
const deleteUser = (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);



export default {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser
}

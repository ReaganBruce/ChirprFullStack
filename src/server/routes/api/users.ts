import * as express from 'express'; //Importing from express
import db from '../../db'; //Importing queries into users file

const router = express.Router()

router.get('/:userid', async (req, res) => {
    const userId = Number(req.params.userid);
    try {
        if (userId) {
            const getUser = await db.users.getOneUser(userId);
            res.json(getUser);
        } else {
            const getAllUsers = await db.users.getAllUsers();
            res.json(getAllUsers);
        }
    } catch (error){
        console.log(error);
        res.status(500).json({ msg: 'Did not get User', error: error.message});
    }
})

router.get('/', async (req, res) => {
	try {
		const getUsers = await db.users.getAllUsers();
		res.json(getUsers);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not get all Users', error: error.message });
	}
});


router.post('/', async (req, res) => {
	const userPosted = req.body;
	try {
		const postNewChirp = await db.users.newUser(userPosted.id, userPosted.name, userPosted.email, userPosted.password);
		res.json(postNewChirp);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'User did not post', error: error.message });
	}
});


router.put('/:userid', async (req, res) => {
    const userId = Number(req.params.userid);
    const userEdit = req.body;
	try {
		const userUpdatedChirp = await db.users.updateUser(userId, userEdit.name, userEdit.email, userEdit.password)
		res.json(userUpdatedChirp)
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not update new Chirp', error: error.message });
	}
});


router.delete('/:userid', async (req, res) => {
    const userid = Number(req.params.userid);
	try {
		const deleteUser = await db.users.deleteUser(userid);
		res.json(deleteUser);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not delete Chirp', error: error.message });
	}
});





export default router;
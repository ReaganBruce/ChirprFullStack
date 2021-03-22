import * as express from 'express'; //Importing express
import db from '../../db'; //Importing queries into chirps file

const router = express.Router();

//GET LOCALHOST3000/API/CHIRPS/123
router.get('/:chirpid', async (req, res) => {
    const chirpId = Number(req.params.chirpid);
	try {
		if(chirpId) {
			const chirp = await db.chirps.getOneChirp(chirpId);
			res.json(chirp);
		} else {
			const allChirps = await db.chirps.getAllChirps();
			res.json(allChirps);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not get Chirps by ID', error: error.message });
	}
});

//GET LOCALHOST3000/API/CHIRPS
router.get('/', async (req, res) => {
	try {
		const getChirps = await db.chirps.getAllChirps();
		res.json(getChirps);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not get all Chirps', error: error.message });
	}
});

//POST LOCALHOST3000/API/CHIRPS
router.post('/', async (req, res) => {
	const postChirp = req.body;
	try {
		const postNewChirp = await db.chirps.newChirp(postChirp.userid, postChirp.content, postChirp.location);
		res.json(postNewChirp);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not add new Chirp', error: error.message });
	}
});

//PUT LOCALHOST3000/API/CHIRPS/123
router.put('/:chirpid', async (req, res) => {
    const chirpId = Number(req.params.chirpid);
    const editedChirp = req.body;
	try {
		const updatedChirp = await db.chirps.updateChirp(chirpId, editedChirp.content, editedChirp.location)
		res.json(updatedChirp)
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not update new Chirp', error: error.message });
	}
});

//DELETE LOCALHOST3000/API/CHIRPS/123
router.delete('/:chirpid', async (req, res) => {
    const chirpid = Number(req.params.chirpid);
	try {
		const deleteChirps = await db.chirps.deleteChirp(chirpid);
		res.json(deleteChirps);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not delete Chirp', error: error.message });
	}
});

export default router;

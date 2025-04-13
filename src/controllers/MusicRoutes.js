import { MusicManager } from "../services/MusicManager.js";

const musicManager = new MusicManager();

export const musicCreateRoute = async (req, res) => {
	const { playlistId, name, year, artist } = req.body;

	if (!playlistId || !name || !year || !artist) {
		res.status(404).send({ error: "Invalid fields value" });
		return;
	}

	try {
		await musicManager.createMusic(playlistId, name, year, artist);
		res.status(201).send({ success: "music created" });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
};
export const musicUpdateRoute = async (req, res) => {
	const { playlistId, musicId, newName } = req.body;

	try {
		await musicManager.updateMusic(playlistId, musicId, newName);
		res.status(200).send({ success: "music updated" });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
};
export const musicDeleteRoute = async (req, res) => {
	const { playlistId, musicId } = req.body;
	try {
		await musicManager.removeMusic(playlistId, musicId);
		res.status(200).send({ success: "music deleted" });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
};

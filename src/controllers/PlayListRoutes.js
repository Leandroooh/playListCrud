import { PlayListManager } from "../services/PlayListManager.js";

export const playlistManager = new PlayListManager();

export const playlistIndexRoute = (req, res) => {
	res.send("Você está acessando a PlayList ( Crud ) API");
};

// /playlists/
export const playlistsShowRoute = async (req, res) => {
	const allPlayList = await playlistManager.getAllPlayList();

	if (allPlayList.length <= 0) {
		res.status(404).send({ error: "database is empty" });
		return;
	}

	res.status(200).send({ allPlayList });
};

// /playlists/:id
export const playlistsShowByIdRoute = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		res.status(404).send({ error: "Id not found" });
		return;
	}

	try {
		const playListFound = await playlistManager.getPlayListById(id);
		res.status(200).send({ playListFound });
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
};

// /playlists/create
export const playlistCreateRoute = async (req, res) => {
	const { title, tags } = req.body;

	if (!title) {
		res.status(400).send({ error: "Title is not valid" });
		return;
	}

	if (!tags || !Array.isArray(tags)) {
		res.status(400).send({ error: "Tags need to be an array" });
		return;
	}

	try {
		await playlistManager.createPlaylist(title, tags);

		res
			.status(201)
			.send({ success: `The playlist ${title} successfully created!` });
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
};

// /playlists/delete/:id
export const playlistDeleteRoute = async (req, res) => {
	const { id } = req.params;

	try {
		await playlistManager.deletePlaylistById(id);
		res.status(200).send({ sucess: `${id} deleted success` });
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
};

// /playlists/update/:id
export const playlistUpdateRoute = async (req, res) => {
	const { id } = req.params;
	const { title, tags } = req.body;

	try {
		await playlistManager.updatePlaylistById(id, title, tags);
		res.status(200).send({ success: "playlist update success" });
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
};

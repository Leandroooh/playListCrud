import { DataBaseManager } from "../controllers/DataBaseManager.js";
import { MusicModel } from "../models/MusicModel.js";
import { PlayListModel } from "../models/PlayListModel.js";

export const db = new DataBaseManager("http://localhost:3000");
const endpoint = "playlists";

export class PlayListManager {
	async createPlaylist(title, tags = []) {
		if (!title) {
			throw new Error("Creation Error: Name for playlist is invalid");
		}

		const allPlayList = await this.getAllPlayList();

		const existsPlaylist = allPlayList.some(
			(playlist) => playlist.title === title,
		);

		if (existsPlaylist) {
			throw new Error("Creation Error: Name not available");
		}

		const playlistModel = new PlayListModel(title, tags);
		await db.createItem(endpoint, playlistModel);
	}

	async getAllPlayList() {
		return db.getAllData(endpoint);
	}

	async getPlayListById(id) {
		if (!id) {
			throw new Error(`Search Error: #${id} not found`);
		}

		const playlistFound = await db.getDataById(endpoint, id);
		return playlistFound;
	}

	async updatePlaylistById(id, newTitle, newTags) {
		if (!id) {
			throw new Error("Id not found");
		}
		const allPlayList = await this.getAllPlayList();

		const existsPlaylist = allPlayList.some(
			(playlist) => playlist.title === newTitle && playlist.id !== id,
		);

		if (existsPlaylist) {
			throw new Error("Update Error: Name not available");
		}

		const data = {
			title: newTitle,
			tags: newTags,
		};

		const updateData = {};

		for (const [key, value] of Object.entries(data)) {
			if (!value) {
				continue;
			}
			updateData[key] = value;
		}

		const updatedPlaylist = await db.updateItem(endpoint, id, updateData);
		return updatedPlaylist;
	}

	async deletePlaylistById(id) {
		if (!id) {
			throw new Error("Id not found");
		}

		await db.deleteItem(endpoint, id);
	}

	async saveMusicInPlayListById(id, musicName, musicYear, musicArtist) {
		if (!id) {
			throw new Error("Id not found");
		}
		if (!musicName || !musicYear || !musicArtist) {
			throw new Error("Invalid data");
		}

		const foundPlaylist = await this.getPlayListById(id);

		if (!foundPlaylist) {
			throw new Error("Playlist ID not found");
		}

		const newData = new MusicModel(id, musicName, musicYear, musicArtist);

		foundPlaylist.musics.push(newData);
		const data = { musics: foundPlaylist.musics };

		await db.updateItem(endpoint, id, data);
		return newData;
	}
}

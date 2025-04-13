import { MusicModel } from "../models/MusicModel.js";
import { db, PlayListManager } from "./PlayListManager.js";

const manager = new PlayListManager();

export class MusicManager {
	async createMusic(playlistId, name, year, artist) {
		if (!playlistId || !name || !year || !artist) {
			throw new Error("Please, verify data! [Id, Name, Year and Artist]");
		}

		await manager.saveMusicInPlayListById(playlistId, name, year, artist);
	}

	async updateMusic(playlistId, musicId, newName) {
		if (!playlistId || !musicId) {
			throw new Error("Id not found");
		}

		if (!newName) {
			throw new Error("New name is necessary!");
		}

		const playList = await manager.getPlayListById(playlistId);
		const foundMusic = playList.musics.find(
			(music) => Number(music.id) === Number(musicId),
		);

		foundMusic.name = newName;

		await db.updateItem("playlists", playlistId, { musics: playList.musics });
	}

	async removeMusic(playlistId, musicId) {
		if (!playlistId || !musicId) {
			throw new Error("Id not found");
		}

		const playList = await manager.getPlayListById(playlistId);

		const updatesMusics = playList.musics.filter(
			(music) => Number(music.id) !== Number(musicId),
		);

		if (updatesMusics.length === playList.musics.length) {
			throw new Error("Music not found");
		}

		await db.updateItem("playlists", playlistId, { musics: updatesMusics });
	}
}

// (async () => {
// 	const manager = new PlayListManager();
// 	const musicManager = new MusicManager();

// 	// Teste de criação de música
// 	// await musicManager.createMusic(4686, "Imagine", 1971, "John Lennon");
// 	// console.log(await manager.getPlayListById(4686)); // Verificando se a música foi adicionada

// 	// Teste de atualização de música
// 	await musicManager.removeMusic(4686, 2475);
// 	console.log(await manager.getPlayListById("4686"));

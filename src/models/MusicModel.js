export class MusicModel {
	constructor(playListId, name, year, artist) {
		this.id = Math.ceil(Math.random() * 9999).toString();
		this.name = name;
		this.year = year;
		this.artist = artist;
		this.playlistId = playListId;
	}
}

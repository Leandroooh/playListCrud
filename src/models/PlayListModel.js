export class PlayListModel {
	constructor(title, tags) {
		this.id = Math.ceil(Math.random() * 9999).toString();
		this.title = title;
		this.tags = tags;
		this.musics = [];
	}
}

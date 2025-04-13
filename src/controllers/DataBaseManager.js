export class DataBaseManager {
	#baseURL;
	constructor(baseURL) {
		this.#baseURL = baseURL;
	}

	buildUrl(endpoint, id) {
		if (id !== undefined) {
			return `${this.#baseURL}/${endpoint}/${id}`;
		}

		return `${this.#baseURL}/${endpoint}`;
	}

	async verifyResponse(response) {
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`ERRO! ${errorText}`);
		}
	}

	async getAllData(endpoint) {
		const response = await fetch(this.buildUrl(endpoint));
		const data = await response.json();

		await this.verifyResponse(response);
		return data;
	}

	async getDataById(endpoint, id) {
		const response = await fetch(this.buildUrl(endpoint, id));
		await this.verifyResponse(response);
		return response.json();
	}

	async createItem(endpoint, data) {
		const response = await fetch(this.buildUrl(endpoint), {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		});

		await this.verifyResponse(response);

		return response.json();
	}

	async deleteItem(endpoint, id) {
		const response = await fetch(this.buildUrl(endpoint, id), {
			method: "DELETE",
		});

		await this.verifyResponse(response);
	}

	async updateItem(endpoint, id, data) {
		try {
			const response = await fetch(this.buildUrl(endpoint, id), {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			await this.verifyResponse(response);

			return await response.json();
		} catch (error) {
			throw new Error(`${error.message}`);
		}
	}
}

import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NOTE_API {
  static async create(newNote) {
    return (await axios.post(`${BASE_URL}`, newNote)).data;
  }

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data;
  }

  static async fetchById(id) {
    return (await axios.get(`${BASE_URL}/${id}`)).data;
  }

  static async deleteById(id) {
    return (await axios.delete(`${BASE_URL}/${id}`)).data;
  }

  static async updateById(updatedNote) {
    return (await axios.patch(`${BASE_URL}/${updatedNote.id}`, updatedNote)).data;
  }
}

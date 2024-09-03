import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    console.log('HousesController Loaded');

    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}
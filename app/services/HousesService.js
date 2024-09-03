import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Houses received from API: ', response.data);

  }

}

export const housesService = new HousesService()
import { ApiUrl, instance } from './api';

export const api_drivers = {

  async getDrivers() {
    return await instance.get(`${ApiUrl}drivers.json`)
  },
  async getDriverById(id: string) {
    return await instance.get(`${ApiUrl}drivers/${id}.json`)
  },
  async getRacesById(id: string) {    
    return await instance.get(`${ApiUrl}drivers/${id}/races.json`)
  }
}
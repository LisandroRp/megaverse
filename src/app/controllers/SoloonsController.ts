import HttpProvider from '../api/HttpProvider';

const api = new HttpProvider();

export default class SoloonsController {

  postSoloons(args?: { row: number, column: number, color: "blue" | "red" | "purple" | "white", candidateId?: string }) {
    return api.request('post', `soloons`, args);
  }

  deleteSoloons(args?: { row: number, column: number, candidateId?: string }) {
    return api.request('delete', `soloons`, { data: args });
  }
}

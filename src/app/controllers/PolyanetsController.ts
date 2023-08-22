import HttpProvider from '../api/HttpProvider';

const api = new HttpProvider();

export default class PolyanetsController {

  postPolyanets(args?: { row: number, column: number, candidateId?: string }) {
    return api.request('post', `polyanets`, args);
  }

  deletePolyanets(args?: { row: number, column: number, candidateId?: string }) {
    return api.request('delete', `polyanets`, { data: args });
  }
}

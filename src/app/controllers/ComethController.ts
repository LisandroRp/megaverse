import HttpProvider from '../api/HttpProvider';

const api = new HttpProvider();

export default class ComethController {

  postCometh(args?: { row: number, column: number, direction: "up" | "down" | "right" | "left", candidateId?: string }) {
    return api.request('post', `comeths`, args);
  }

  deleteCometh(args?: { row: number, column: number, candidateId?: string }) {
    return api.request('delete', `comeths`, { data: args });
  }
}

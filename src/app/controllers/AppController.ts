import HttpProvider from '../api/HttpProvider';

const api = new HttpProvider();

export default class AppController {

  getGoal() {
    return api.request('get', `map/${process.env.REACT_APP_CANDIDATE_ID}/goal`);
  }
}

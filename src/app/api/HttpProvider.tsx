import Axios from 'axios';

type TMethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';
interface IRequest {
  method: TMethodType;
  url: string;
  params?: Object;
}

export const baseURL = process.env.REACT_APP_BACK_BASE_URL || 'https://challenge.crossmint.io/api/'; // development

const axios = Axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
});

export default class HttpProvider {
  request = async (
    method: IRequest['method'], url: IRequest['url'],
    params?: IRequest['params']
  ) => {
    return axios[method](url, params);
  }
}
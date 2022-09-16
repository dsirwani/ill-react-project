import { axiosInstance } from './axiosService';

class HTTPService {
  get(path: string): Promise<any> {
    return axiosInstance['get'](path);
  }

  post(path: string, data: any, config: any): Promise<any> {
    return axiosInstance.post(path, data, config);
  }

  delete(path: string, data: any): Promise<any> {
    return axiosInstance.delete(path, { data: data });
  }

  put(path: string, data: any, config: any = {}): Promise<any> {
    return axiosInstance.put(path, data);
  }

  patch(path: string, data: any, config: any): Promise<any> {
    return axiosInstance.patch(path, data, config);
  }
}

export default HTTPService;

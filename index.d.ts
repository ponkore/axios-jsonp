import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

//                                             AxiosJsonp.Config
declare function jsonpAdapter<T = any>(config: any): AxiosPromise<AxiosResponse<T>>;

declare namespace jsonpAdapter {
  interface Config extends AxiosRequestConfig {
    callbackParamName?: string;
    cancelToken?: any;
  }
}

export = jsonpAdapter;

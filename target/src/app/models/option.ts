import { HttpHeaders, HttpParams } from "@angular/common/http";

export class Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: string = 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: string = 'json';
  withCredentials?: boolean;

  constructor(init?: Partial<Options>) {
    Object.assign(this, init);
  }
}

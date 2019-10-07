import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from '../models/option';
import * as moment from 'moment';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(path: string, options?: Options) {
    return this.http.get<T>(`${environment.apiurl}`, <{}>(options || this.options))
      .toPromise()
      .catch(this.handleError);
  }

  public post<T>(path: string, data: any, options?: Options) {
    return this.http.post<T>(`${environment.apiurl}`, options ? data : JSON.stringify(data), <{}>(options || this.options))
      .toPromise()
      .catch(this.handleError);
  }

  public get options() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': `${this.oidcService.user.token_type} ${this.oidcService.user.access_token}`
    });

    return new Options({ headers: headers });
  }

  public getArrayBuffer(path: string) {
    return this.http.get(`${environment.apiurl}`, (this.fileDownloadOptions as any));
  }

  private get AuthHeader() {
    return {
      'Authorization': ``
    };
  }

  public get fileUploadOptions() {
    let headers = new HttpHeaders(this.AuthHeader);
    let options = new Options({ headers: headers });
    return options;
  }

  public get fileDownloadOptions() {
    let headers = new HttpHeaders(this.AuthHeader);
    return new Options({ headers: headers, responseType: 'blob' });
  }

  private handleError(error: Response) {
    console.log("ERROR: ", error);
    switch (error.status) {
      case 401: //Unauthorized
        window.location.reload();
        break;
      //case 404: //Not found
      //  window.location.replace('/app/dist/assets/pages/404.html?msg=' + JSON.stringify(error));
      //  break;
      //case 500: //Internal Server Error
      //  window.location.replace('/app/dist/assets/pages/error.html?msg=' + JSON.stringify(error));
      //  break;
      //default:
      //  console.error(error);
      //  break;
    }

    return Promise.reject(error || 'Server error');
  }

  public setDates<T>(data: object, targetClass: T): object {
    if (data != null) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && targetClass.hasOwnProperty(key) && data[key] != null) {
          data[key] = targetClass[key] instanceof Date ? new Date(data[key]) :
            targetClass[key] instanceof moment ? moment(data[key]) :
              data[key];
        }
      }
    }

    return data;
  }
}

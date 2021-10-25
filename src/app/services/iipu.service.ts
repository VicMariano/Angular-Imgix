import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParametersFull } from '../interfaces/edit-type.interface';
import { ITestImage } from '../interfaces/imagen-test.interface';

@Injectable({
  providedIn: 'root'
})
export class IipuService {

  constructor( private http: HttpClient) { }

  public getTestImgs(): Observable<ITestImage[]> {
    return this.http.get<ITestImage[]>('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json');
  }

  public getParametersJSON(): Observable<IParametersFull> {
    return this.http.get<IParametersFull>('https://raw.githubusercontent.com/imgix/imgix-url-params/master/dist/parameters.json');
  }
}

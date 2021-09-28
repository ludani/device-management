import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Device{
  id : string;
  category? : string;
  color? : string;
  partNumber? : string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BaseUrl = 'http://localhost:8080/category';
  constructor( private http: HttpClient) { }

    create(register: Device): Observable<Device> {
      return this.http.post<Device>(this.BaseUrl, register)
    };

    read(): Observable<Device[]>{
      console.log(this.BaseUrl);
      return this.http.get<Device[]>(this.BaseUrl)
    }

    readById(id: number): Observable<Device>{
      const url = `${this.BaseUrl}/${id}`
      console.log(url);
      return this.http.get<Device>(url);
      
      };  
      
      update(register: Device): Observable<Device>{
        const url = `${this.BaseUrl}/${register.id}`
        return this.http.put<Device>(url, register);
        };  

      delete(id: number): Observable<Device>{
        const url = `${this.BaseUrl}/${id}`;
       return this.http.delete<Device>(url)
      }
    }


   
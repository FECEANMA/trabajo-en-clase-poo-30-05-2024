import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  })
  export class ApiService {
  private url = 'http://localhost:3000 '

  constructor(private http: HttpClient) { }

create<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/employees`, item);
}

}


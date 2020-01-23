import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

var endpoint= environment;

@Injectable({ providedIn: 'root' })
export class UserService {

  public notificationURL = 'https://us-central1-thingsboard-ef4c4.cloudfunctions.net/webApi/api/v1/subscribe';
    constructor(private http: HttpClient) { }

    getAll() {
        // return this.http.get<User[]>(endpoint.apiUrl +'/users');
    }

    getById(id: number) {
        // return this.http.get(`${config.apiUrl}/users/${id}`);
    }

    register(user: User) {
        // return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        // return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        // return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
    postSubscription(sub: PushSubscription) {
        return this.http.post(this.notificationURL, sub).pipe(catchError(this.handlError));
    }
      
    handlError(error) {
    return throwError(error.error.message);
    }
}
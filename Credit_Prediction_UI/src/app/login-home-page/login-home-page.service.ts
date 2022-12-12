import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth/auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class LoginHomePageService {


readonly flaskAPI = "http://localhost:5000/predictStatus";

constructor(private http: HttpClient, private authService: AuthServiceService) {}



getCreditPredictStatus(data: any) {
  return this.http.post(this.flaskAPI, data, {responseType: 'text' });
}

}

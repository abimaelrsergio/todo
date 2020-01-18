import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //console.log("Execute Hello World Bean Service");
    return this.http.get('http://192.168.15.6:8080/hello-world-bean');
  }

}

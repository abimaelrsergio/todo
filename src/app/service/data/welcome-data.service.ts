import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //console.log("Execute Hello World Bean Service");
    return this.http.get<HelloWorldBean>('http://192.168.15.6:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    //console.log("Execute Hello World Bean Service");
    return this.http.get<HelloWorldBean>(`http://192.168.15.6:8080/hello-world/path-variable/${name}`);
  }

}

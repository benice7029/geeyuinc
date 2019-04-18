import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  httpBaseUrl :string;

  constructor() { 
    /**
     * when deploy on project,change to {project_name}/api/
     */
    this.httpBaseUrl = 'http://localhost:8080/geeyu/api/'
  }
}

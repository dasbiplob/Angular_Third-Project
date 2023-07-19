import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //dependency injection
 // private svc: TestService;
  constructor(private svc: TestService, private http:HttpClient){
   // this.svc=svc;
   this.svc.printToConsole("Got the Service!");
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/defunkt');
    obs.subscribe((response) => console.log(response));

  }
}

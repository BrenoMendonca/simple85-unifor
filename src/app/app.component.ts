import { Component } from '@angular/core';

export interface NavBarData{
  buttonName: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarData: NavBarData[] = [
    {buttonName: 'home', routerLink: '/home'},
    {buttonName: 'login', routerLink: '/login'},
    {buttonName: 'cadastre-se', routerLink: '/signon'},
    {buttonName: 'contato', routerLink: '/contact'}
  ]
}

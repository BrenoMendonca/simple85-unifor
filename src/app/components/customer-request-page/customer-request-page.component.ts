import { Component, OnInit } from '@angular/core';

export interface CustomerRequest{
  name: string;
  address: string;
  phone: string;
  email: string;
  requestTopic: string;
  requestDescription: string;
}

@Component({
  selector: 'app-customer-request-page',
  templateUrl: './customer-request-page.component.html',
  styleUrls: ['./customer-request-page.component.scss']
})
export class CustomerRequestPageComponent implements OnInit {

  request: CustomerRequest = {
    name: '',
    address: '',
    phone: '',
    email: '',
    requestTopic: '',
    requestDescription: '',
  };

  requestTopicList = [
    'Família',
    'Moradia',
    'Saúde',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendCostumerRequest(e): void {
    console.log({
      message: 'Form submitted',
      data: this.request
    })
    e.preventDefault();
  }

}

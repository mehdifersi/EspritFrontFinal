import {Component, OnInit} from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;



}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: ''},
  { path: '/complaints', title: 'Complaint management',  icon:'dashboard', class: ''},
  { path: '/user-profile', title: 'User management',  icon:'person', class: ''},
  { path:'/product-management',title: 'Product and gifts',  icon:'content_paste',class:''},
  { path: '/typography', title: 'Donation and association',  icon:'library_books', class: ''},
  { path: '/event-managment', title: 'Event and reservation',  icon:'bubble_chart', class: ''},
  { path: '/maps', title: 'Article and comment',  icon:'location_on', class: ''},
  { path: '/notifications', title: 'Pruchase and order',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Contact',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-side-bar-back',
  templateUrl: './side-bar-back.component.html',
  styleUrls: ['./side-bar-back.component.css']
})
export class SideBarBackComponent implements OnInit {
  menuItems?: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}

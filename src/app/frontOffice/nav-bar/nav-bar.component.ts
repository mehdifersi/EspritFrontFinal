import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit  {
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(public location: Location, private element : ElementRef,private pageScrollService: PageScrollService) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '/documentation' ) {
      return true;
    }
    else {
      return false;
    }
  }
  scrollToElement() {
    this.pageScrollService.scroll({
      document: document,
      scrollTarget: '#element-id',
      duration: 100000, // adjust as needed
    });
  }
}

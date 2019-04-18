import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  
  
  @ViewChild('content') content: ElementRef;


  toTop: boolean = true;

  ngAfterViewInit(): void {
    fromEvent(document,'scroll').subscribe(
      () => {
        if(this.content.nativeElement.getBoundingClientRect().top == 0)
          this.toTop = true;
        else
          this.toTop = false;
      }
    )
    
  }
  goToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

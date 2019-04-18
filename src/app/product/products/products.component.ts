import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private buttons ;

  @ViewChild('button_line')button_line: ElementRef;


  private btnClick;

  constructor() { }

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    this.buttons = document.getElementsByClassName('btn');
    this.button_line.nativeElement.style.width = 
    this.buttons[0].clientWidth + 'px';
    this.button_line.nativeElement.style.top = 
    this.buttons[0].clientHeight + 'px';

    document.getElementById('button_line').style.left = '0px';
    this.btnClick = fromEvent(this.buttons,'click')
                    .subscribe(
                      (e: any) => {
                        console.log(e)
                        this.button_line.nativeElement.style.width = 
                        e.target.clientWidth + 'px';
                        this.button_line.nativeElement.style.top = 
                        (e.target.offsetTop + e.target.clientHeight) 
                        + 'px';  
                        this.button_line.nativeElement.style.left = 
                        e.target.offsetLeft + 'px';                        
                      }
                    );
  }

}

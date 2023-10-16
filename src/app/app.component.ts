import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit():void{
    const appRoot = this.elementRef.nativeElement;
    const numDots = 15;

    for (let i = 1; i <= numDots; i++) {
      const div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'buble');
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);
      this.renderer.setStyle(div, 'top', `${top}%`);
      this.renderer.setStyle(div, 'left', `${left}%`);
      this.renderer.setStyle(div, 'animation', `animate 10s linear infinite`);
      const dot = this.renderer.createElement('span');
      this.renderer.addClass(dot, 'dot');
      this.renderer.appendChild(div, dot);
      this.renderer.appendChild(appRoot, div);
    }
  }
}

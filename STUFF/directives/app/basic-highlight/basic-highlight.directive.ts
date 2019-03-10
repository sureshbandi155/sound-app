import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.elementRef.nativeElement.style.boxShadow = '0 0 15px black';
}
}

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor  ; /*backgroundColor = 'transparent'*/
  /*@HostBinding('style.color') color: string;*/

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
/*
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
*/
  }
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');*/
    this.backgroundColor = this.highlightColor; /*'blue';*/
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');*/
    this.backgroundColor =  this.defaultColor; /*'transparent';*/
    /*this.color = 'white';*/
  }
}

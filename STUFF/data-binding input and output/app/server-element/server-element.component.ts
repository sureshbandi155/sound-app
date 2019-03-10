import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit ,
  OnChanges,
  DoCheck ,
  AfterContentInit ,
  AfterContentChecked ,
  AfterViewInit,
  AfterViewChecked ,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentparagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnlnit called');
    console.log('text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content paragraph: ' +this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDocheck called!');
}
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    console.log('ngAftercontent called!');
    console.log('Text Content paragraph: ' +this.paragraph.nativeElement.textContent);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('text Content : ' + this.header.nativeElement.textContent);

  }
  ngAfterViewChecked() {
    console.log('ngAfterViewchecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}

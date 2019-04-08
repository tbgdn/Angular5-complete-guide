import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }
}

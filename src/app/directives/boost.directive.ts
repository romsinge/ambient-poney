import { Poney } from './../interfaces/poney';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ambBoost]'
})
export class BoostDirective {

  @Input() poney: Poney
  @Input() hasBoost: boolean

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "forestgreen"
  }

  @HostListener('dblclick') handleDblclick() {
    if (this.hasBoost) {
      this.poney.distance += 10

      let runningImg = this.poney.img.replace('rainbow', 'running')
      let rainbowImg = runningImg.replace('running', 'rainbow')
      this.poney.img = rainbowImg

      setTimeout(() => {
        this.poney.img = runningImg
      }, 1000)
    }
  }
}

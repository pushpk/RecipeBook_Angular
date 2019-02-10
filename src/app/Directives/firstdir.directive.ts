import { Directive, ElementRef,OnInit, Renderer2, HostListener} from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive(
    {
        selector: '[firstone]'
      }
)
export class firstDirective implements OnInit {
    constructor(private el: ElementRef, private renderer : Renderer2){
      
    };

    @HostListener("mouseenter") mouseover(eventData  : Event)
    {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');

    }
    
    @HostListener("mouseleave") mouseleave(eventData  : Event)
    {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');

    }

    ngOnInit(){
        //this.el.nativeElement.style.backgroundColor = "green";
    }
}

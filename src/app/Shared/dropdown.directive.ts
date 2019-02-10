import {Directive, HostListener, HostBinding, OnInit} from "@angular/core";

@Directive({selector : '[toggleDropDown]'})
export class Dropdowndirective implements OnInit {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){

        this.isOpen = !this.isOpen;
    }

    ngOnInit(){
        
    }

}
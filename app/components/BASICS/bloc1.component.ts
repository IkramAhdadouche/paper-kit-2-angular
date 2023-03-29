import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc1',
  templateUrl: './bloc1.component.html'
})
export class Bloc1Component implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}

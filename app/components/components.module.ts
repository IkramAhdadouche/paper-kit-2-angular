import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { Bloc1Component } from './BASICS/bloc1.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Bloc2Component } from './BASICS2/bloc2.component';


import { ComponentsComponent } from './components.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        Bloc1Component,
        NavigationComponent,
        Bloc2Component,
        
      
      
    ],
   
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }

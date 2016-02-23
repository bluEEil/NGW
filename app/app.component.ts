import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {DrawerPanelComponent} from './drawer-panel.component';
import {LogOperations} from './log_operations/log.operations';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><log-operation></log-operation><ngw-drawer-panel></ngw-drawer-panel>',
    directives:[LogOperations, DrawerPanelComponent]
})
export class AppComponent implements OnInit{
    ngOnInit():any {

    }
}
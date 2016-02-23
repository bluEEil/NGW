/**
 * Created by Ziv on 2/23/2016.
 */
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'ngw-drawer-panel',
    template: `

    <paper-drawer-panel id="menuDrawerPanel">

    <div drawer><h1>drawer section</h1></div>
        <div main>
            <paper-toolbar class="main">
                <h1>My toolbar</h1>
            </paper-toolbar>
        </div>

    </paper-drawer-panel>
    `
})
export class DrawerPanelComponent implements OnInit{

    private _bIsDrawerOpen: boolean;

    constructor() {
        this._bIsDrawerOpen = true;
    }
    ngOnInit():any {

    }
    toggleDrawer() : void {

        var drawer : any = document.querySelector("#menuDrawerPanel");

        if (this._bIsDrawerOpen) {
            drawer.closeDrawer();

        }
        else
            drawer.openDrawer();

        this._bIsDrawerOpen = !this._bIsDrawerOpen;
    }
}
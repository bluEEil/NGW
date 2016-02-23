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
                <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
            </paper-toolbar>
        </div>

    </paper-drawer-panel>
    `
})
export class DrawerPanelComponent{

    toggleDrawer() : void {

        drawer.togglePanel();
    }
}
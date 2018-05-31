import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public isRequesting: boolean;
    public items: Array<any>;

    constructor() {
        this.refresh();
        setTimeout(() => {this.stopRefreshing();}, 3000);
        this.refresh();
    }

    public refresh(): void {
        this.isRequesting = true;
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }
}

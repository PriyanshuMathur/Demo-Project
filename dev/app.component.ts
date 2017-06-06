import {Component} from '@angular/core';
import {FirstPageComponent} from './first-page.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <first-page></first-page>
        `,
	directives: [FirstPageComponent]
})
export class AppComponent {

}
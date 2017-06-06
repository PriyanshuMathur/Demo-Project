import {Component} from '@angular/core';
import {TestComponent} from './test.component';
import {OnInit} from '@angular.core';

@Component({
	selector: 'first-page',
	template :`
				<h1>This is my first Component</h1>
				Hi , I'm <span [style.color]="inputElement.value ==='yes' ? 'red' : 'black'">{{name}}</span>
				<span [class.is-awesome]="inputElement.value ==='yes'"> This is very awesome</span>
				<br>
				<br>
				Is it Awesome?
				<input type="text" #inputElement (keyup)="0">
				<br><br>
				<button [disabled]="inputElement.value !== 'yes'"> only enabled if 'yes' was entered</button>
				<test></test>
	`,
	styleUrls: ['src/css/firstPage.css'],
	directives :[TestComponent]
})	
export class FirstPageComponent implements OnInit{
	name = string ;

	ngOnInit():any{
		this.name = "Priyanshu";
	}

}
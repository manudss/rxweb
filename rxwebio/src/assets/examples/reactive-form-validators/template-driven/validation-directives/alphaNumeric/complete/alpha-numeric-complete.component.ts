import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { Location } from './location.model';

@Component({
    selector: 'app-alphaNumeric-complete-template-driven-validation-directives',
    templateUrl: './alpha-numeric-complete.component.html'
})
export class AlphaNumericCompleteTemplateDrivenValidationDirectivesComponent implements OnInit {
    location: Location
	
    constructor(
    ) { }

    ngOnInit() {
       this.location= new Location()
    }
}

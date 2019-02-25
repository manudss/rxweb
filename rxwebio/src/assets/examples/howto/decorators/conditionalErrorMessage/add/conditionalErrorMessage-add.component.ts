import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormGroup,FormGroupExtension,RxFormBuilder,FormBuilderConfiguration,RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormField } from './form.model';


@Component({
    selector: 'app-conditional-add',
    templateUrl: './conditionalErrorMessage-add.component.html'
})
export class conditionalErrorMessageAddComponent implements OnInit {
errorObject = {}
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
      var formField = new FormField();
        this.userInfoFormGroup =<RxFormGroup>this.formBuilder.formGroup(formField);
    }

    submit(){
      if(this.userInfoFormGroup.invalid)
        this.userInfoFormGroup.controls.action.setValue("submit");
      
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-noneOf-matchValues',
    templateUrl: './none-of-match-values.component.html'
})
export class NoneOfMatchValuesComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder ,private http: HttpClient) { }

        projectDomainsArray : string[] = [];
      
        ngOnInit() {
          let employeeInfo = new EmployeeInfo();
          this.http.get("assets/examples/reactive-form-validators/decorators/noneOf/matchValues/none-of.json").subscribe(response => {
            this.projectDomainsArray = response['projectDomainsArray'];
        })
      
          this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
        }

        index = 0;
        addProjectDomain(element:any) {
          var value = this.employeeInfoFormGroup.controls.projectDomains.value;
          if(!value)
            value = [];
            if(element.checked) {
                  value.push(element.value);
                  this.index++;
            }
            else
            {
            var indexOf = value.indexOf(element.value);
            value.splice(indexOf,1);
            }
          this.employeeInfoFormGroup.controls.projectDomains.setValue(value)
        }
}

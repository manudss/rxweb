import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-noneOf-complete-validator',
    templateUrl: './none-of-complete.component.html'
})
export class NoneOfCompleteValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    qualificationsArray: string[] = [];
    skillsArray: string[] = [];
    hobbiesArray: string[] = [];
    projectDomainsArray : string[] = [];

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            department:[''],
            projectDomains:['', RxwebValidators.noneOf({matchValues:["ECommerce", "Banking","Educational","Gaming"]})], 
            qualifications:['',RxwebValidators.noneOf({matchValues:["Secondary","Senior Secondary","B.Tech","M.Tech","B.C.A.","M.C.A."], conditionalExpression: (x,y) => x.department =='DotNet'})],
            skills:['',RxwebValidators.noneOf({matchValues: ["MVC", "AngularJS","Angular 5","C#","Web Api","SQL Server"], conditionalExpression: "x => x.department =='DotNet'"})],
            hobbies:['',RxwebValidators.noneOf({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please do not select any hobby"})]
        });
        this.http.get("assets/examples/reactive-form-validators/validators/noneOf/complete/none-of.json").subscribe(response => {
            this.qualificationsArray = response['qualificationsArray'];
            this.skillsArray = response['skillsArray'];
            this.hobbiesArray = response['hobbiesArray'];
            this.projectDomainsArray = response['projectDomainsArray'];
        })
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

    addQualification(element:any) {
        var value = this.employeeInfoFormGroup.controls.qualifications.value;
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
        this.employeeInfoFormGroup.controls.qualifications.setValue(value)
      }

      addSkill(element:any) {
        var value = this.employeeInfoFormGroup.controls.skills.value;
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
        this.employeeInfoFormGroup.controls.skills.setValue(value)
      }

      addHobby(element:any) {
        var value = this.employeeInfoFormGroup.controls.hobbies.value;
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
        this.employeeInfoFormGroup.controls.hobbies.setValue(value)
      }
}

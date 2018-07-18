import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Questions } from '../utilities/Questions';

@Component
({
    selector: 'newstaffsurvey-component',
    templateUrl: 'newstaffsurvey.html'
})

export class NewStaffSurveyComponent
{
    surveyStaffForm: FormGroup;
    date = '';
    mode ='date';
    
    constructor(private fb: FormBuilder)
    {
        this.createSurveyForm();
    }
    
     createSurveyForm() 
     {
        this.surveyStaffForm = this.fb.group({
        
              survey_name : ['', Validators.required],
              owner       : ['', Validators.required],
              questions   : this.fb.array([])
              
            });
     }
    
    setQuestions(questions: Questions[]) 
    {
        const questsFGs = questions.map(question => this.fb.group(question));
        const questsFormArray = this.fb.array(questsFGs);
        this.surveyStaffForm.setControl('questions', questsFormArray);
     }
  
    get questions(): FormArray {
        return this.surveyStaffForm.get('questions') as FormArray;
      };
  
    addQuestions()
    {
        // this.surveyForm.get(`frequency.${index}.settings`) as FormArray;
        // const control = this.surveyForm.controls['frequency'] as FormArray;
       //  const control = <FormArray>this.surveyForm.controls['questions'];
        // control.push(this.initQuestions());
        
        this.questions.push(this.fb.group(new Questions()));
    }
   /* removeQuestions(i: number)
    {
        const control = <FormArray>this.surveyForm.controls['questions'];
        control.removeAt(i);
    } */
     onSubmit()
     {}
     

}
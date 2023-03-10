import { Component, OnInit } from '@angular/core';
import { Question } from '../models/Question';
import { QuestionService } from '../services/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Level } from '../models/Level';
import { Type } from '../models/Type';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
  questionForm: FormGroup

  submitted = false;


  constructor(public questionService: QuestionService, private fb: FormBuilder, private router: Router) {
    this.questionForm = this.fb.group({
      name: ['', [Validators.required]],
      levelId: ['', [Validators.required]],
      typeId: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subCategory: ['', [Validators.required]],
      mark: ['', [Validators.required]],
      expectedTime: ['', [Validators.required]],
      createdBy: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],


    }
    )
  }

  levels: Level[] = [
    { id: '1', body: 'level1' },
    { id: '2', body: 'level2' },
    { id: '3', body: 'level3' }
  ];

  types: Type[] = [
    { id: '1', body: 'type1' },
    { id: '2', body: 'type2' },
    { id: '3', body: 'type3' }
  ];


  ngOnInit(): void {
  }
  onSubmit(question: Question) {
    this.questionService.createQuestion(question).subscribe((res) => {
      this.router.navigate([''])

    })


  }

}
//the time of the question (add seconds ou minutes)
//the question should be in a text area
//map entity to dto in a seperate class
//adding new elment in ui
//redundent recylcle bin and add new answer
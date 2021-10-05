import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  getparamid:any;
  
  constructor(private router: ActivatedRoute) { }

  Actor = {
    first_name: '',
    last_name: '',
    last_update: ''
  };
  isActorAdded = false;
  


  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.userForm.patchValue({
      
      });
    }
  }

  userForm = new FormGroup ({
    'first_name': new FormControl('',Validators.required),
    'last_name': new FormControl('',Validators.required),
    'last_update':new FormControl('',Validators.required)
  });
  
}


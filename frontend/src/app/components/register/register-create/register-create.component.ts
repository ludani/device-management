import { Component, OnInit } from '@angular/core';
import { Device, RegisterService } from '../register.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {

  // priceMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  // dateInitMask = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  // dateFinishMask = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  // dateFinishMask = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  register: Device = {
    id: '',
    color: '',
  }

  constructor(private registerService: RegisterService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createRegister(): void{
    this.registerService.create(this.register).subscribe(() => {
     // this.registerService.showOnConsole('Projeto criado!');
      this.router.navigate(['/register']);
    })
  }

  cancel(): void{
    this.router.navigate(['/register']);
    
  }

}

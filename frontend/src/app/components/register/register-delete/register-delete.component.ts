import { ActivatedRoute, Router } from '@angular/router';
import { Device, RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css']
})
export class RegisterDeleteComponent implements OnInit {

  register: Device

  constructor(
    private registerService: RegisterService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //MUDAR O TIPO | ESTÁ SÓ DELETANDO OS DADOS DAS PLANILHAS
    const id = +this.route.snapshot.paramMap.get('id');
    this.registerService.readById(id).subscribe((register) => {
      this.register = register;
    });
  }


  cancel(): void {
    this.router.navigate(['/register'])
  }

}

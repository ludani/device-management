import { Device, RegisterService } from "./../register.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-read",
  templateUrl: "./register-read.component.html",
  styleUrls: ["./register-read.component.css"],
})
export class RegisterReadComponent implements OnInit {
  readRegister: Device[]=[];
  displayedColumns: string[] = ["id", "color", "partNumber"];

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerService.read().subscribe((res) => {
      this.readRegister = res;
      console.log(res);
    },
    error => console.log(error)
    );
  }
}

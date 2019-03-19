import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.scss']
})
export class EmpdataComponent implements OnInit {
public empployees: any;
public empployeesone: any;
  constructor(private _employeeservice: GlobalServiceService) { }

  // ngOnInit() {
  //   this._employeeservice.getGlobalData()
  //   .subscribe((data) => this.empployees = data);    
  // }
  ngOnInit() {
    // this._employeeservice.getGlobalData()
    // .subscribe((data) => this.empployees = data);    
    this._employeeservice.getGlobalData()
    .subscribe(([res1, res2]) => {
     // console.log("res1=="+res1);
     this.empployees = res1;
     this.empployeesone = res2;
    })     
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ntodocreate',
  templateUrl: './ntodocreate.component.html',
  styleUrls: ['./ntodocreate.component.css']
})
export class NtodocreateComponent implements OnInit {
  public ntodo_create_id = "Ntodo";
  public new_ntodo = "";
  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  addNtodo(){
    console.log("Add clicked!");
  }

}

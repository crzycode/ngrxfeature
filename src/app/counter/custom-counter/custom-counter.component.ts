import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changename, customincrement } from 'src/app/state/counter.action';
import { getcounter, getmyname } from 'src/app/state/counter.selector';
import { counterstate } from 'src/app/state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
  value!:number;
  myname!:string;

  constructor(
    private store:Store<{counter:counterstate}>
  ) { }

  ngOnInit(): void {
    this.store.select(getmyname).subscribe(myname =>{
      console.log("my name is changed")
      this.myname = myname
    })
  }
  addnumber(){
    this.store.dispatch(customincrement({value:+this.value}));
  }
  changethename(){
    this.store.dispatch(changename())
  }
}

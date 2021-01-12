import { Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  input1:String;
  child:String="ChildProp"
  @Input() name:String;
  @Output() val=new EventEmitter<String>()
  
  constructor(private service:ServiceService) {
    console.log("In constructor, child");
    //Using subject in Service and Using that service in parent Component, value is getting emitted using next() method
    //Here, common_var value is getting consumed
    this.service.
      common_var.subscribe(val => {
      console.log(val)
    })
  }
  
  ngOnInit() {
    this.input1 = "Child Component Property";
    console.log("In NgOnInit child, child property is", this.input1)
  }
  //ngOnChanges life Cycle Method will get executed before ngOnInit..
  ngOnChanges(changes: SimpleChanges) {

    console.log("In changes child", changes)
  }
 
  btnHandler(){
    
    console.log("on Button Click",this.input1);
    this.val.emit(this.input1)
    // return this.input1;
  }
}

import { Component, OnChanges, OnInit, SimpleChanges, ViewChild,ViewChildren, QueryList, AfterViewInit, SimpleChange, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component'
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  parentToChildProperty: String = "parent-property-default"
  //By this ViewChild Annotation of ChildComponent, We can access properties and method of Child Component in Parent Component
   @ViewChild(ChildComponent, {static:false}) child:ChildComponent;
   @ViewChildren(ChildComponent) childRef: QueryList<ChildComponent>;
  @ViewChildren("email") ref:QueryList<ElementRef>
   childInput:String="Property will get changed in Parent Comp by the click in Child Comp";
  constructor(private service:ServiceService) {
    console.log("In constructor, parent");
  }
  
  ngOnInit() {

    console.log("In NgOnInit parent", this.childInput)
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("In changes parent", changes)
  }
  
  ngAfterViewInit() {
    
    // this.childInput=this.child.btnHandler();
    this.ref.map(x => {

      x.nativeElement.value="Harika";}
      )

   console.log("From Child", this.childRef.last.child)
    // console.log("after view init", this.childInput)
  }
  //This fromChild method gets executed on click on button in Child Component..The emitted value from child comp will be collected here..
  fromChild(x){
    this.childInput=x
    this.service.common_var.next("Lol")
  }
  changeParentProperty() {
    this.parentToChildProperty="Hello from Parent"
  }
}

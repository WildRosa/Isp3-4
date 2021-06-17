import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }
  DepartmentList: any = [];

  ModalTitle:string = '';
  ActivateAddEditDepComp:boolean = false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList(); 
  }
  addClick(){
    this.dep =  {
      DepartmentId:0,
      DepartmentName:"",
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item:any) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }
  deleteClick(item:any) {
    let val = {
      DepartmentId: item.DepartmentId,
    }
    console.log(val)
    if(confirm('Sure?')) {
      this.service.deleteDepList(val).subscribe(res => {
        alert(res.toString())
      })
    }
    }
  


  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }
  refreshDepList() {
    this.service.getDepList().subscribe((data) => {
      this.DepartmentList = data;
    });
  } 

}

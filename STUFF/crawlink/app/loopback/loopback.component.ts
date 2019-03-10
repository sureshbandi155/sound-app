import { LoopBackService } from './../loopback.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loopback',
  templateUrl: './loopback.component.html',
  styleUrls: ['./loopback.component.css']
})
export class LoopbackComponent implements OnInit {
  public loopBackData = [];
  constructor(private lopService: LoopBackService) { }

  ngOnInit() {
    this.loopBack();
  }
  loopBack() {
    this.lopService.getData()
    .subscribe(data =>
       this.loopBackData = data
       console.log(loopBackData);
       );
  }

}

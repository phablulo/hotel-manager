import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check-in/check.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private checkService: CheckService) { }

  checkout: Boolean = false;
  

  ngOnInit() {
  }

}

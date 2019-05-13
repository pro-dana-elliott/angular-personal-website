import {Component, Input, OnInit} from '@angular/core';
import {JobModel} from '../job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
 @Input() job: JobModel;
  constructor() { }

  ngOnInit() {
  }

}

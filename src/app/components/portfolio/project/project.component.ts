import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectModel;
  constructor() { }

  ngOnInit() {
  }

  OpenProject(URL: string) {
    if (URL) {
      // console.log('try open project');
      window.open(URL);
    }
  }
}


import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../project.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-angular-projects',
  templateUrl: './angular-projects.component.html',
  styleUrls: ['./angular-projects.component.css']
})
export class AngularProjectsComponent implements OnInit {
projects = [ new ProjectModel('This Website',
                          'Showcase what I can do for you by presenting my skills, experience, and past work.',
                  ['Single Page Application.',
                              'Angular 7',
                              'Bootstrap 4',
                              'TypeScript',
                              'HTML5',
                              'CSS3',
                              'Responsive Design'],
                          ''),
    new ProjectModel('Voting Application',
                      'Simulates ranked voting and standard voting.' +
                               ' Pick your candidates, number of voters and see who wins.',
                  ['Single Page Application.',
                              'Angular 7',
                              'Bootstrap 4',
                              'TypeScript',
                              'HTML5',
                              'CSS3',
                              'Responsive Design'
                             ],
                         'http://voting-app-angular.' + environment.domain),
  new ProjectModel('Recipe Book Application with Database',
                      'Keep track of your favorite recipes and a shopping list for ingredients.' +
                               ' Save/retrieve your recipes with a database.',
                  ['Single Page Application.',
                              'Angular 7',
                              'Bootstrap 4',
                              'TypeScript',
                              'HTML5',
                              'CSS3',
                              'Responsive Design',
                              'Firebase database'
                             ],
                         'http://recipe-app-angular.' + environment.domain)
          ];
  constructor() { }

  ngOnInit() {
  }

}

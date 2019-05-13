import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../project.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-vue-projects',
  templateUrl: './vue-projects.component.html',
  styleUrls: ['./vue-projects.component.css']
})
export class VueProjectsComponent implements OnInit {
  projects = [new ProjectModel('Recipe Book Application',
                      'Keep track of your favorite recipes and a shopping list for ingredients.',
                  ['Single Page Application.',
                              'VUE 2',
                              'JavaScript',
                              'CSS3',
                              'HTML5',
                              'Responsive Design',
                              'VUE Router',
                              'Vuex',
                              'Vuelidate',
                              'Animate.css'],
                         'http://recipe-app-vue.' + environment.domain),
              new ProjectModel('Stock Trader',
                      'A small stock trader application.',
                  ['Single Page Application',
                               'VUE 2',
                               'JavaScript',
                               'CSS3',
                               'HTML5',
                               'Responsive Design',
                               'VUE Router',
                               'Vuex'],
                          'http://stock-trader.' + environment.domain),
              new ProjectModel('Monster Slayer Game',
                      'A simple game. Try and slay the monster.',
                   ['Single Page Application',
                               'VUE 2',
                               'JavaScript',
                               'CSS3',
                               'HTML5',
                               'Responsive Design',
                               'VUE SweetAlert2'],
                          'http://monster-slayer.' + environment.domain),
              new ProjectModel('Quotes App',
                      'A small app to play with quotes.',
                  ['Single Page Application',
                              'Vue 2',
                              'JavaScript',
                              'CSS3',
                              'HTML5',
                              'Responsive Design'],
                          'http://quote-app.' + environment.domain),
              new ProjectModel('The Super Quiz',
                      'A little quiz game',
                   ['Single Page Application',
                               'Vue 2',
                               'JavaScript',
                               'CSS3',
                               'HTML5',
                               'Responsive Design',
                               'Animate.css'],
                          'http://super-quiz.' + environment.domain)
            ];
  constructor() { }

  ngOnInit() {
  }

}

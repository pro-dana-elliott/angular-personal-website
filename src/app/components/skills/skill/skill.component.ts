import { Component, OnInit, Input } from '@angular/core';
import {SkillsModel} from '../skills.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skillName: string;
  @Input() percentProgress: number;
  @Input() obSkills: SkillsModel;
  nameColor: string;

  constructor() { }

  ngOnInit() {
    this.nameColor = this.obSkills.color;
 }



}

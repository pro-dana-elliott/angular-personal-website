import {Component, OnDestroy, OnInit} from '@angular/core';
import {SkillsModel} from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {
  private _isOddRow = true;

  // private  newRowIndex = new Subject<any>();
  // private  newRowIndexSubscription;

  constructor() { }

  ngOnInit() {
    // this.newRowIndexSubscription = this.newRowIndex.subscribe(
    //   () => {
    //     this._isOddRow = !this._isOddRow;
    //   }
    // );
  }
  ngOnDestroy() {
    // this.newRowIndexSubscription.unsubscribe();
  }

  obSkills(): SkillsModel {
    let color = 'red';

    if ( this._isOddRow ) {
          this._isOddRow = !this._isOddRow;
      color = 'red';
    } else {
          this._isOddRow = !this._isOddRow;
      color = 'blue';
    }
    return new SkillsModel(color);
  }

  //   rowColor(): string {
  //   if (this._isOddRow) {
  //     this._isOddRow = false;
  //     return 'red';
  //   } else {
  //     this._isOddRow = true;
  //     return 'blue';
  //   }
  // }

}

import { Component, OnInit } from '@angular/core';
import { Dice } from '../models/dice.models';
import { calculsService } from '../services/calculs.service';

@Component({
  selector: 'app-yams-page',
  templateUrl: './yams-page.component.html',
  styleUrls: ['./yams-page.component.scss']
})
export class YamsPageComponent implements OnInit {

  InitalDice: Dice[] = [];
  currentKeepedDice: Dice[] = [];
  currentNotKeepedDice: Dice[] = [];
  currentThrow: number = 0;

  constructor(private calcul: calculsService) { }

  ngOnInit(): void {
    this.firstThrow();
  }

  firstThrow() {
    for (let i = 0; i < 5; i++) {
      var init = new Dice();
      init.nombre = this.calcul.getRandomInt(1, 6);
      init.isKeep = false;
      this.InitalDice.push(init);
    }
    this.currentThrow += 1;
  }

  secondThrow() {
    let nbThrow = 0;
    for (let i = 0; i < this.InitalDice.length; i++) {
      if (this.InitalDice[i].isKeep === false) {
        nbThrow += 1;
        this.InitalDice.splice(i, 1);
      }
    }
    for (let i = 0; i < nbThrow; i++) {
      var init = new Dice();
      init.nombre = this.calcul.getRandomInt(1, 6);
      init.isKeep = false;
      this.InitalDice.push(init);
    }
    this.currentThrow += 1;
  }

  thirdThrow() {
    for (let i = 0; i < this.currentNotKeepedDice.length; i++) {
      var init = new Dice();
      init.nombre = this.calcul.getRandomInt(1, 6);
      init.isKeep = false;
      this.InitalDice.push(init);
    }
    this.currentThrow += 1;
  }

  keep(dice: Dice) {
    this.InitalDice[dice.id].isKeep = true;
  }

}

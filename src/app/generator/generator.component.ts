import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  passphrase: string = '';

  words = [
    "sausage",
    "dog",
    "red",
    "blue",
    "green",
    "yellow",
    "hair",
    "look",
    "card"
  ]

  generate() {

    var length = this.words.length;
    var result = '';

    result += this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];

    this.passphrase = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

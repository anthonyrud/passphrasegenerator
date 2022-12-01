import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  passphrase: string = '';
  passphrasenospace: string ='';

  words = [
    "bread",
    "zebra",
    "sheep",
    "black",
    "green",
    "yellow",
    "hairy",
    "lunch",
    "dizzy",
    "brain",
    "child",
    "cream",
    "dream",
    "phone",
    "pilot",
    "train",
    "voice"
  ]

  generate() {

    var length = this.words.length;
    var result = '';

    result += this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];
    result += " " + this.words[(Math.floor(Math.random() * length))];

    this.passphrase = result;
    this.passphrasenospace=result.replace(/ /g,'');

  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassDataParentcompTochild';
  u_prog = ['HTML', 'CSS', 'BOOTSTRAP', 
  'PYTHON', 'JAVASCRIPT'];

prog_details = [`HTML is a widely used 
platform independent language. Java was 
developed by James Gosling.`, 
`CSS is 
multi-paradigm and procedural oriented 
language. Developed by Bjarne Stroustrup.`,

`Bootstrap is a procedural language and 
developed by Dennis Ritchie`,
 `Python is 
a interpreted high level language 
developed by Guido van Rossum`, 
`Javascript is a language that conforms 
the ECMAScript and developed by ECMAScript`];
  options!: number;
curr_info: string | undefined;
prog_title: string | undefined;

constructor() {}

onClick(lang: any) {
switch (lang) {
  case 'HTML':
      this.options = 0;
      this.curr_info = 
          this.prog_details[this.options];

      this.prog_title = 
          this.u_prog[this.options];
      break;
  case 'CSS':
      this.options = 1;
      this.curr_info = 
          this.prog_details[this.options];

      this.prog_title = 
          this.u_prog[this.options];
      break;
  case 'BOOTSTRAP':
      this.options = 2;
      this.curr_info = 
          this.prog_details[this.options];

      this.prog_title = 
          this.u_prog[this.options];
      break;
  case 'PYTHON':
      this.options = 3;
      this.curr_info = 
          this.prog_details[this.options];

      this.prog_title = 
          this.u_prog[this.options];
      break;
  case 'JAVASCRIPT':
      this.options = 4;
      this.curr_info = 
          this.prog_details[this.options];

      this.prog_title = 
          this.u_prog[this.options];
      break;
  default:
      break;
}
}
}


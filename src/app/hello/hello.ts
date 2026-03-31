import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title: string = 'Welcome to Morden Angular!';

  protected isDisable = false;

  protected onClick() {
    console.log('Button clicked');
    this.isDisable = !this.isDisable;
  }
}

import { Component, signal } from '@angular/core';

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

  protected count = signal(0);

  increateCounter() {
    this.count.update(value => value + 1);
  }

  decreaseCounter() {
    this.count.update(value => value - 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}

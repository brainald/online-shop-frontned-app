import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styles: [],
  template: `
    <app-header />
    <router-outlet />
  `,
})
export class App {}

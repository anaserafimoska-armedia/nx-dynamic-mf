import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-cart-entry',
  template: `

    <style>
      input[type=text] {
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid silver;
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      #container {
        border: 2px darkred dashed;
        padding: 20px;
      }
    </style>
    <br>
    <div id='container'>
      <h1>Remote App</h1>
      <div>
        <input type='text' placeholder='Remote ID'>
      </div>
      <div>
        <input type='text' placeholder='Remote name'>
      </div>
      <div>
        <input type='text' placeholder='Remote username'>
      </div>
      <div>
        <ng-container #vc></ng-container>
      </div>
    </div>
  `
})
export class RemoteEntryComponent {}

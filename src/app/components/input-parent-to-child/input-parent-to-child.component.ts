import { Component } from '@angular/core';
import { InputChildComponent } from './input-child/input-child.component';

@Component({
  selector: 'app-input-parent-to-child',
  standalone: true,
  templateUrl: './input-parent-to-child.component.html',
  styleUrls: ['./input-parent-to-child.component.scss'],
  imports: [InputChildComponent],
})
export class InputParentToChildComponent {
  message = 'Hello from Parent Component!';
}

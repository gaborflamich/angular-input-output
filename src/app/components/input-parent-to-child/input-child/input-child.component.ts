import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss'],
})
export class InputChildComponent {
  @Input() message?: string;
}

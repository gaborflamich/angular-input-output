import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewchild-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.scss'],
})
export class ViewchildChildComponent {
  message: string = 'Hello from Child Component!';
}

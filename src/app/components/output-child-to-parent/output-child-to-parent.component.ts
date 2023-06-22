import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputChildComponent } from './output-child/output-child.component';

@Component({
  selector: 'app-output-child-to-parent',
  standalone: true,
  imports: [CommonModule, OutputChildComponent],
  templateUrl: './output-child-to-parent.component.html',
  styleUrls: ['./output-child-to-parent.component.scss'],
})
export class OutputChildToParentComponent {
  message?: string;

  receiveMessage($event: string | undefined) {
    this.message = $event;
  }
}

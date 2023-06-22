import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputChildClickComponent } from './output-child-click/output-child-click.component';

@Component({
  selector: 'app-output-child-to-parent-click',
  standalone: true,
  imports: [CommonModule, OutputChildClickComponent],
  templateUrl: './output-child-to-parent-click.component.html',
  styleUrls: ['./output-child-to-parent-click.component.scss'],
})
export class OutputChildToParentClickComponent {
  message?: string;

  receiveMessage($event: string | undefined) {
    this.message = $event;
  }
}

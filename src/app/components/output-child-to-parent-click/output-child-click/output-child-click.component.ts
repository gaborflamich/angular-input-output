import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-child-click',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-child-click.component.html',
  styleUrls: ['./output-child-click.component.scss'],
})
export class OutputChildClickComponent {
  message?: string = 'Hello from Child Component';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss'],
})
export class OutputChildComponent implements OnInit {
  message?: string = 'Hello from Child Component!';

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.messageEvent.emit(this.message);
  }
}

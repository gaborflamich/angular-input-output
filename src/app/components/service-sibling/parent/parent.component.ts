import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnDestroy {
  message?: string;
  subscription?: Subscription;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  newMessage() {
    this.data.changeMessage('Hello from Parent');
  }
}

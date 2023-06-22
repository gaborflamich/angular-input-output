import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent implements OnInit, OnDestroy {
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
}

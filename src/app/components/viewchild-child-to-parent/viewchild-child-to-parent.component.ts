import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-child-to-parent',
  standalone: true,
  imports: [CommonModule, ViewchildChildComponent],
  templateUrl: './viewchild-child-to-parent.component.html',
  styleUrls: ['./viewchild-child-to-parent.component.scss'],
})
export class ViewchildChildToParentComponent {
  @ViewChild(ViewchildChildComponent) child: any;

  message?: string = 'Hello World!';

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessage($event: string) {
    this.message = $event;
  }
}

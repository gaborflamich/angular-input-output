import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

@Component({
  selector: 'app-service-sibling',
  standalone: true,
  imports: [CommonModule, ParentComponent, SiblingComponent],
  templateUrl: './service-sibling.component.html',
  styleUrls: ['./service-sibling.component.scss'],
})
export class ServiceSiblingComponent {}

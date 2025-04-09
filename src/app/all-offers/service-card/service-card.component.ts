import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() discount: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating: number = 0;
  @Input() reviewCount: number = 0;
  @Input() bookedCount: number = 0;
  @Input() originalPrice: number = 0;
  @Input() discountPrice: number = 0;
  @Input() hasOffer: boolean = false;
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomeComponent implements OnInit {
  user$: Observable<any>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getCurrentUser();
  }

  ngOnInit() {}
}
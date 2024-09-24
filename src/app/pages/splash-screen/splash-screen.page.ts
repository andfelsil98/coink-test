import { Component, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: true,
  imports: [IonContent]
})
export class SplashScreenPage implements OnInit {

  private router = inject(Router)
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/auth-screen']);
    }, 2000);
  }

}

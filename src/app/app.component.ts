import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <style>
      .example-container {
        width: 100%;
        height: 100%;
        margin: 0px;
      }
      .bottom {
        bottom: 15px;
        position: fixed;
      }
      .mat-drawer {
        width: 150px;
      }
    </style>
    <mat-toolbar color="primary" *ngIf="showNavbar">
      <mat-icon (click)="sidenav.toggle()">menu</mat-icon>
      <span>Progetto S11 - Movies</span>
    </mat-toolbar>

    <mat-sidenav-container class="example-container" >
      <mat-sidenav mode="push" #sidenav>
        <mat-list>
          <mat-list-item>
            <button color="primary" mat-raised-button [routerLink]="['/']">
              Movies
            </button>
          </mat-list-item>
          <mat-list-item>
            <button
              color="accent"
              mat-raised-button
              [routerLink]="['/profile']"
            >
              Profile
            </button>
          </mat-list-item>
          <mat-list-item class="bottom">
            <button color="warn" mat-flat-button (click)="logout();sidenav.toggle()">
              Logout
            </button>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [],
})
export class AppComponent {
  title = 'movies';
  public showNavbar = false;

  constructor(private authSrv: AuthService) {
    console.log(this.authSrv.user$);
  }
  ngOnInit() {
    this.authSrv.user$.subscribe(user => {
      this.showNavbar = !!user
    })
  }
  logout() {
    this.authSrv.logout();
  }
}

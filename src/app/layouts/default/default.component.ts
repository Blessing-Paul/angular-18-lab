import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent implements OnInit {
  isMobile = false;
  showSidebarOverlay = false;
  isSidebarCollapsed = false;
  isSidebarVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();

    // Auto-close overlay sidebar on route change (for mobile)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.showSidebarOverlay = false;
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 992;

    if (this.isMobile) {
      this.isSidebarCollapsed = false; // optional, mobile uses overlay
      this.showSidebarOverlay = false;
    } else {
      this.showSidebarOverlay = false;
      this.isSidebarCollapsed = false; // reset collapsed state on desktop
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      if (this.showSidebarOverlay) {
        // Delay removing the sidebar to allow close animation
        this.showSidebarOverlay = false;
        setTimeout(() => {
          this.isSidebarVisible = false;
        }, 300); // Match your CSS transition duration
      } else {
        this.isSidebarVisible = true;
        // Wait a tick before applying .show to trigger animation
        setTimeout(() => {
          this.showSidebarOverlay = true;
        }, 0);
      }
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
}

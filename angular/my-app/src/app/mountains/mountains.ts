import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MountainService } from '../mountain-service';
import { Mountain } from '../mountain.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountains',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mountains.html',
  styleUrl: './mountains.css',
})
export class Mountains implements OnInit {

  mountains: Mountain[] = [];

  constructor(
    private mountainService: MountainService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.loadMountains();
  }

  loadMountains() {
    this.mountainService.getAllMountains().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.mountains = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error(err)
    });
  }

 deleteMountain(id: string) {
  this.mountainService.deleteMountain(id).subscribe({
    next: () => {
      this.loadMountains(); 
    },
    error: (err) => {
      console.error('Error deleting mountain:', err);
    }
  });
}

  goToAdd() {
     this.router.navigate(['/mountains/add']); 
    }
  goToEdit(id: string) { 
    this.router.navigate([`/mountains/edit/${id}`]); 
  }
  goToDetails(id: string) { 
    this.router.navigate([`/mountains/${id}`]); 
  }
}
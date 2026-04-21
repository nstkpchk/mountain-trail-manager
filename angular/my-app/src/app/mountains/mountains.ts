import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Import
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
    private cdr: ChangeDetectorRef // 2. Wstrzyknięcie
  ) {}
  
  ngOnInit(): void {
    this.loadMountains();
  }

  loadMountains() {
    this.mountainService.getAllMountains().subscribe({
      next: (data) => {
        console.log('Otrzymane dane:', data);
        this.mountains = data;
        this.cdr.detectChanges(); // 3. Wymuszenie odświeżenia widoku
      },
      error: (err) => console.error(err)
    });
  }

 deleteMountain(id: string) {
  this.mountainService.deleteMountain(id).subscribe({
    next: () => {
      // ✅ TO JEST KLUCZOWE: 
      // Dopiero gdy serwer potwierdzi usunięcie (kod 204), pobieramy nową listę.
      this.loadMountains(); 
    },
    error: (err) => {
      console.error('Nie udało się usunąć:', err);
    }
  });
}

  // ... (reszta metod bez zmian)
  goToAdd() { this.router.navigate(['/mountains/add']); }
  goToEdit(id: string) { this.router.navigate([`/mountains/edit/${id}`]); }
  goToDetails(id: string) { this.router.navigate([`/mountains/${id}`]); }
}
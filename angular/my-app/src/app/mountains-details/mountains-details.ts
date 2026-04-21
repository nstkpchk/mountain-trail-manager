import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Import
import { MountainService } from '../mountain-service';
import { ActivatedRoute } from '@angular/router';
import { Mountain } from '../mountain.model';
import { Trail } from '../trail.model';
import { TrailService } from '../trail-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountains-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mountains-details.html',
  styleUrl: './mountains-details.css',
})
export class MountainsDetails implements OnInit {
  mountain!: Mountain;
  trails: Trail[] = [];
  mountainId!: string;

  constructor(
    private route: ActivatedRoute,
    private mountainService: MountainService,
    private trailService: TrailService,
    private router: Router,
    private cdr: ChangeDetectorRef // 2. Wstrzyknięcie
  ) {}

  ngOnInit(): void {
    this.mountainId = this.route.snapshot.paramMap.get('id')!;
    this.loadMountain();
    this.loadTrails();
  }

  loadMountain() {
    this.mountainService.getMountainById(this.mountainId).subscribe({
      next: (m) => {
        this.mountain = m;
        this.cdr.detectChanges(); // 3. Odświeżenie widoku (góra)
      },
      error: (err) => console.error('Błąd pobierania góry:', err)
    });
  }

  loadTrails() {
    this.trails = []; // czyść przed requestem!
    this.trailService.getTrailsByMountain(this.mountainId).subscribe({
      next: (t) => {
        this.trails = t ?? [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.trails = []; // przy błędzie też czyść
        console.error('Błąd pobierania tras:', err);
      }
    });
  }

  deleteTrail(id: string) {

    this.trailService.deleteTrail(id).subscribe({
      next: () => {
        this.loadTrails(); // Ponowne pobranie i odświeżenie listy
      },
      error: (err) => console.error('Błąd usuwania trasy:', err)
    });
  }

  goBack() {
    this.router.navigate(['/mountains']);
  }
  
  goToAddTrail() {
    this.router.navigate([`/trails/add/${this.mountainId}`]);
  }
  
  goToEditTrail(trailId: string) {
    this.router.navigate([`/trails/edit/${trailId}/${this.mountainId}`]);
  }
  
  goToTrailDetails(trailId: string) {
    this.router.navigate([`/trails/details/${trailId}/${this.mountainId}`]);
  }
}
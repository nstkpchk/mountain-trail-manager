import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Import CDR
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TrailService } from '../trail-service';
import { MountainService } from '../mountain-service';
import { Trail } from '../trail.model';
import { Mountain } from '../mountain.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trails-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trails-details.html',
  styleUrl: './trails-details.css'
})
export class TrailsDetails implements OnInit {

  trail!: Trail;
  mountain!: Mountain;

  trailId!: string;
  mountainId!: string;

  constructor(
    private route: ActivatedRoute,
    private trailService: TrailService,
    private mountainService: MountainService,
    private router: Router,
    private cdr: ChangeDetectorRef // 2. Wstrzyknięcie
  ) {}

  ngOnInit() {
    this.trailId = this.route.snapshot.paramMap.get('trailId')!;
    this.mountainId = this.route.snapshot.paramMap.get('mountainId')!;

    // Pobranie szlaku
    this.trailService.getTrailById(this.trailId).subscribe({
      next: (trail) => {
        this.trail = trail;
        this.cdr.detectChanges(); // 3. Wymuszenie odświeżenia
      },
      error: (err) => console.error('Błąd pobierania szlaku', err)
    });

    // Pobranie góry
    this.mountainService.getMountainById(this.mountainId).subscribe({
      next: (mountain) => {
        this.mountain = mountain;
        this.cdr.detectChanges(); // 3. Wymuszenie odświeżenia
      },
      error: (err) => console.error('Błąd pobierania góry', err)
    });
  }

  goBack() {
    this.router.navigate([`/mountains/${this.mountainId}`]);
  }
}
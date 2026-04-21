import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
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
    private cdr: ChangeDetectorRef 
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
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error fetching mountain:', err)
    });
  }

  loadTrails() {
    this.trails = []; 
    this.trailService.getTrailsByMountain(this.mountainId).subscribe({
      next: (t) => {
        this.trails = t ?? [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.trails = []; 
        console.error('Error fetching trails:', err);
      }
    });
  }

  deleteTrail(id: string) {

    this.trailService.deleteTrail(id).subscribe({
      next: () => {
        this.loadTrails();
      },
      error: (err) => console.error('Error deleting trail:', err)
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
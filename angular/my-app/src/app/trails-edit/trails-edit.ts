import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailService } from '../trail-service';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Trail } from '../trail.model';
import { MountainService } from '../mountain-service';

@Component({
  selector: 'app-trails-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trails-edit.html',
  styleUrl: './trails-edit.css',
})
export class TrailsEdit {
  mountainId!: string;
  trailForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    difficulty: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  });

  trailId!: string;

  constructor(
    private mountainService: MountainService,
    private trailService: TrailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.mountainId = this.route.snapshot.paramMap.get('mountainId')!;
    this.trailId = this.route.snapshot.paramMap.get('id')!;
    if (!this.trailId) {
      console.error('Brak ID w URL!');
      this.router.navigate(['/mountains']);
      return;
    }
    this.trailService.getTrailById(this.trailId).subscribe({
      next: (trail: Trail) => {
        this.trailForm.patchValue({
          name: trail.name,
          difficulty: trail.difficulty
        });
      },
      error: err => console.error('Błąd pobierania szlaku:', err)
    });
  }

  onSubmit() {
    this.mountainId = this.route.snapshot.paramMap.get('mountainId')!;
    if (this.trailForm.valid) {
      this.trailService.updateTrail(this.trailId, this.trailForm.value)
        .subscribe({
          next: () => this.router.navigate([`/mountains/${this.mountainId}`]),
          error: err => console.error('Błąd aktualizacji szlaku:', err)
        });
    }
  }
}

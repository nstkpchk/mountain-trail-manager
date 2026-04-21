import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailService } from '../trail-service';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MountainService } from '../mountain-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trails-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trails-add.html',
  styleUrl: './trails-add.css',
})
export class TrailsAdd {
  mountainId!: string;

  trailForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    difficulty: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  });

  constructor(
    private trailService: TrailService,
    private mountainService: MountainService, 
    private router: Router,
    private route: ActivatedRoute) {}

  onSubmit() {
    this.mountainId = this.route.snapshot.paramMap.get('mountainId')!;
    if (this.trailForm.valid) {
      this.mountainService.addTrailToMountain(this.mountainId,this.trailForm.value).subscribe({
        next: () => this.router.navigate([`/mountains/${this.mountainId}`]), // wraca do listy
        error: err => console.error('Błąd dodawania trasy:', err)
      });
    }
  }

}

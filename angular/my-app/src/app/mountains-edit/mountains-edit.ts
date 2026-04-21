import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MountainService } from '../mountain-service';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Mountain } from '../mountain.model';

@Component({
  selector: 'app-mountains-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './mountains-edit.html',
  styleUrl: './mountains-edit.css',
})
export class MountainsEdit {
  mountainForm = new FormGroup({
  name: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  });

  mountainId!: string;

  constructor(
    private mountainService: MountainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Pobranie ID z URL
    this.mountainId = this.route.snapshot.paramMap.get('id')!;
    if (!this.mountainId) {
    console.error('Brak ID w URL!');
    this.router.navigate(['/mountains']); 
    return;
    }
    this.mountainService.getMountainById(this.mountainId).subscribe({
      next: (mountain: Mountain) => {
        this.mountainForm.patchValue({
          name: mountain.name
        });
      },
      error: err => console.error('Błąd pobierania góry:', err)
    });
  }

  onSubmit() {
    if (this.mountainForm.valid) {
      this.mountainService.updateMountain(this.mountainId, this.mountainForm.value)
        .subscribe({
          next: () => this.router.navigate(['/mountains']),
          error: err => console.error('Błąd aktualizacji góry:', err)
        });
    }
  }

}

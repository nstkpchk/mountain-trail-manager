import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainService } from '../mountain-service';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mountains-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './mountains-add.html',
  styleUrl: './mountains-add.css',
})
export class MountainsAdd {
  mountainForm = new FormGroup({
  name: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  });

  constructor(private mountainService: MountainService, private router: Router) {}

  onSubmit() {
    if (this.mountainForm.valid) {
      this.mountainService.addMountain(this.mountainForm.value).subscribe({
        next: () => this.router.navigate(['/mountains']), // wraca do listy
        error: err => console.error('Błąd dodawania góry:', err)
      });
    }
  }

  
}

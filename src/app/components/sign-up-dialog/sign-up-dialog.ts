import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatDialogClose, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../ecommerce-store';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';

@Component({
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatPrefix,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  selector: 'app-sign-up-dialog',
  styles: ``,
  template: `
    <div class="p-8 max-w-[400px] flex flex-col">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-medium mb-1">Sign In</h2>
          <p class="text-sm text-gray-500">Sign in to your account to continue shopping</p>
        </div>
        <button tabindex="-1" matIconButton class="-mt-2 -mr-2" mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <form class="mt-6" [formGroup]="signUpForm" (ngSubmit)="signUp()">
        <mat-form-field class="w-full mb-4">
          <input matInput formControlName="name" type="text" placeholder="Enter your email" />
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>

        <mat-form-field class="w-full mb-4">
          <input matInput formControlName="email" type="email" placeholder="Enter your email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-form-field class="w-full mb-6">
          <input
            matInput
            formControlName="password"
            type="password"
            placeholder="Enter your password"
          />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>

        <mat-form-field class="w-full mb-6">
          <input matInput formControlName="confirmPassword" placeholder="Confirm your password" />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>
        <button type="submit" matButton="filled" class="w-full">Sign Up</button>
      </form>
      <p class="text-sm text-gray-500 mt-2 text-center">
        Already have an account?
        <a class="text-blue-600 cursor-pointer" (click)="openSignInDialog()">Sign In</a>
      </p>
    </div>
  `,
})
export class SignUpDialog {
  fb = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);

  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  passwordVisible = signal(false);
  matDialog = inject(MatDialog);

  signUpForm = this.fb.group({
    email: ['john@test.com', Validators.required],
    name: ['John D', Validators.required],
    password: ['test123', Validators.required],
    confirmPassword: ['test123', Validators.required],
  });

  async signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { email, password, name } = this.signUpForm.value;

    if (email && password && name) {
      await this.store.signUp({
        email,
        password,
        name,
        checkout: this.data?.checkout,
        dialogId: this.dialogRef.id,
      });
    }
  }

  openSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignInDialog, {
      data: {
        checkout: this.data?.checkout,
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(private MS: MemberService, private router: Router) {}
  //injection de dependances

  form!: FormGroup;
  //bech yjibou les données el kol m3a baathhom
  // ! tjib null kenou feragh

  ngOnInit(): void {
    this.initForm();
  }
  onsub(): void {
    //recuperation des donnes entre par user
    console.log(this.form.value);
    //appeler la fonction onSAVE(this.form.value)
    //du service MemberService
    const MemberToSave = this.form.value;
    this.MS.ONSAVE(MemberToSave).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
}

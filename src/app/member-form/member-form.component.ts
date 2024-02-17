import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Member } from 'src/modeles/Member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(
    private MS: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  //injection de dependances

  form!: FormGroup;
  //bech yjibou les données el kol m3a baathhom
  // ! tjib null kenou feragh

  //chargement du composant
  ngOnInit(): void {
    //1. récupèrer id de l'url
    //activatedRoute traja3lek la route actuelle active
    //snapshot pour faire la capture d'image d'url
    //params pour dire on cherche l'id
    const idcourant = this.activatedRoute.snapshot.params['id'];
    //console.log(idcourant);
    //2. tester sur id
    // !! test truly : si idcourant existe et différent de undefined
    if (!!idcourant) {
      //3. si id existe avec une valeur
      //getMemberById(id) >> na3melha f service
      this.MS.getMemberById(idcourant).subscribe((member) => {
        // console.log(member);
        // initForm2(member)
        this.initFormEdit(member);
      });
    } else {
      //4. sinon je suis dans create => initForm()
      this.initForm();
    }
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

  initFormEdit(member: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(member.cin, [Validators.required]),
      name: new FormControl(member.name, [Validators.required]),
      cv: new FormControl(member.cv, [Validators.required]),
      type: new FormControl(member.type, [Validators.required]),
    });
  }
}

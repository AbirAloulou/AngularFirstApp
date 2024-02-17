import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/modeles/Member';
import { MemberService } from '../../services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  nom = 'data binding';

  //displayedColumns responsable à l'ordre d'affichage des colonnes
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'cv',
    'type',
    'createdDate',
    'actions',
  ];

  // dataSource: Member[] = GLOBAL.DB.members;
  dataSource: Member[] = this.MS.tab;

  //Déclaration d'un tableau
  //dataSource = [{}, {}]

  // dataSource = [{
  //   id: '1234',
  //   cin: '1234563',
  //   name: 'abir',
  //   cv: 'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf',
  //   type: 'student',
  //   createdDate: '12/15/2015',
  // },
  // {
  //   id: '1234',
  //   cin: '1234563',
  //   name: 'haytham',
  //   cv: 'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf',
  //   type: 'enseignant',
  //   createdDate: '12/20/2020',
  // }];

  constructor(private MS: MemberService, private dialog: MatDialog) {}
  delete(id: string): void {
    //Appel de dialog
    //1 ouvrir la boite
    //dialog est une instance de type dialog définit dans le construteur
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    //2 attendre le resultat de l'utilisateur
    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        //3. Si confirm
        //appeler la fct de service ONDELETE ()
        this.MS.ONDELETE(id).subscribe(() => {
          //on refraiche le table après suppression
          this.dataSource = this.MS.tab;

          //avec le backend
        });
    });

    //Sinon je fais rien
  }
}

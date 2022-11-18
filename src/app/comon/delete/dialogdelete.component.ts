import { Component } from '@angular/core';  
import { MatDialogRef } from '@angular/material/dialog'; 



@Component({
 // selector: 'app-cliente',
  templateUrl: 'dialogdelete.component.html',
  styleUrls: ['dialogdelete.component.scss']
})

export class DialogDeleteComponent {
    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>){
        
    }
}
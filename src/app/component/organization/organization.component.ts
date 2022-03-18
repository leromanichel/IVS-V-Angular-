import { Component, OnInit } from '@angular/core';
import { Organization } from '../../models/organization.model';
import { OrganizationService } from '../../services/organization/organization.service';
import { Chart } from 'chart.js';
import { Building } from 'src/app/models/building.model';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit {
  organizationArray: Organization[] = [];

  constructor(private oraganizationService: OrganizationService) {}

  ngOnInit(): void {
    this.organizationArray = this.oraganizationService.getOrganization();
    this.oraganizationService.getOrganizationApi().subscribe((result) => {
      const data = result['hydra:member'];
      console.log(result);
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        const organizationName = data[i].nom;
        const organizationO = new Organization(organizationName);
        const building = data[i].buildings;

        this.organizationArray.push(organizationO);
        
        // console.log(organizationName);

        for (let j = 0; j < building.length; j++) {
         
          const piece = building[j].pieces
          const buildingName = building[j].nom;
          const buildingZipCode = building[j].zipCode;
          const buildingO = new Building(buildingName);
          organizationO.buildings.push(buildingO);
          

          // console.log('   ' + buildingName,buildingZipCode);

          for (let k = 0; k < piece.length; k++) {
            
            const pieceName = piece[k].nom;
            const pieceNbPersonIn = piece[k].nbPersonIn;
            const pieceNbPersonCapacity = piece[k].nbPersonCapacity;
            const pieceO = new Piece(pieceName,pieceNbPersonIn,pieceNbPersonCapacity);
            buildingO.pieces.push(pieceO);
            buildingO.nbPersonIn += pieceNbPersonIn;
            buildingO.nbPersonCapacity += pieceNbPersonCapacity;

            // console.log('       '+pieceName + ' - ' +  pieceNbPersonIn + ' - ' + pieceNbPersonCapacity);
            
          }
          organizationO.nbPersonIn +=  buildingO.nbPersonIn;
          organizationO.nbPersonCapacity +=  buildingO.nbPersonCapacity;
          
        } 
        
      }
      // this.organizationArray.forEach(element=>{
      //   console.log(element);
      //   console.log(element.nom);
      // });

    });

    // this.oraganizationService.getOrganizationApi2().subscribe(result=>{
    //   this.organizationArray = result;
    //   console.log(this.organizationArray);
    //   console.table(this.organizationArray);
    // });

  }

}

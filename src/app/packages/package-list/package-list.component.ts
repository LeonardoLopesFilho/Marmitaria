import { Component, OnInit} from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco','Churrasco de Picanha','https://i.pinimg.com/736x/af/1f/3e/af1f3e5a6afb2dd21f05e48905c1b03e.jpg'),
    
  ];

  constructor(){}

  
  ngOnInit(): void {
    
  }

}

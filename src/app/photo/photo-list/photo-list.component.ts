import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {Photo} from '../../interface/photo';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe(result => {
      this.photoList = result;
    });
  }

}

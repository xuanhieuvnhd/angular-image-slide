import {Component, OnInit} from '@angular/core';
import { Photo } from 'src/app/interface/photo';
import {PhotoService} from '../../service/photo.service';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent implements OnInit {
  successMessage: any;
  failMessage: any;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
  }

  addPhoto(photoForm: { value: Partial<Photo>; }) {
    this.photoService.createPhoto(photoForm.value).subscribe(() => {
      this.successMessage = 'Tạo mới thành công';
    }, () => {
      this.failMessage = 'Tạo mới thất bại';
    });
  }
}

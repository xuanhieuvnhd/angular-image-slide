import {Component, OnInit} from '@angular/core';
import {Photo} from '../../interface/photo';
import {Subscription} from 'rxjs';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  successMessage: any;
  failMessage: any;
  // @ts-ignore
  photo: Photo;
  // @ts-ignore
  sub: Subscription;

  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.photoService.detailPhoto(id).subscribe(next => {
        this.photo = next;
      }, error => {
        this.failMessage = error;
      });
    });
  }

  updatePhoto(photoForm: { value: Photo; }) {
    // @ts-ignore
    this.photoService.editPhoto(photoForm.value, this.photo.id).subscribe(() => {
      this.successMessage = 'Cập nhật thành công';
    }, () => {
      this.failMessage = 'Cập nhật thất bại';
    });
  }

}

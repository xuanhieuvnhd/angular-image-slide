import {Component, OnInit} from '@angular/core';
import {Photo} from '../../interface/photo';
import {Subscription} from 'rxjs';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-delete',
  templateUrl: './photo-delete.component.html',
  styleUrls: ['./photo-delete.component.css']
})
export class PhotoDeleteComponent implements OnInit {
  // @ts-ignore
  photo: Photo;
  // @ts-ignore
  sub: Subscription;
  failMessage: any;
  successMessage: any;

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
        this.failMessage = error.toString();
      });
    });
  }

  deletePhoto() {
    // @ts-ignore
    this.photoService.deletePhoto(this.photo.id).subscribe(() => {
      this.successMessage = 'Xóa thành công';
    }, () => {
      this.failMessage = 'Xóa thất bại';
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Photo} from '../../interface/photo';
import {Subscription} from 'rxjs';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
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
        console.log(error);
      });
    });
  }

}

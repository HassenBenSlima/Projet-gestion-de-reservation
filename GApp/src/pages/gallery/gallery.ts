import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import "rxjs/add/operator/map";
import {GalleryService} from "../../services/gallery.service";
import {DetailImagePage} from "../detail-image/detail-image";


/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle: string = "";
  size: number = 10;
  currentPAge: number = 1;
  images: any = {hits: []};
  totalPages: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private galleryService: GalleryService,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch() {


    this.images.hits = [];
    this.doSearch();


  }

  doSearch() {

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();

    this.galleryService.chercher(this.motCle, this.size, this.currentPAge)
      .subscribe(data => {
        this.totalPages = data.totalHits / this.size;
        if (this.totalPages % this.size != 0) ++this.totalPages;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });

        loading.dismiss();

      }, err => {

        loading.dismiss();
        // console.log(err);
      })

    // this.http.get("https://pixabay.com/api/?key=10787091-083ccf53bdade2a10b040678c&q=" + this.motCle + "&per_page=10&page=1")
    //   .map(resp => resp.json()).subscribe(data => {
    //   this.images = data;
    // }, err => {
    //   console.log(err);
    // })
  }


  doInfinite(infiniteScroll) {
    if (this.currentPAge < this.totalPages) {

      ++this.currentPAge;

      console.log(this.currentPAge + " / " + this.totalPages);

      this.doSearch();
      infiniteScroll.complete();

    }

  }

  onDetailImage(im) {
    this.navCtrl.push(DetailImagePage, {myImage: im});
  }
}

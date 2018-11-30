import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mainUrl = 'https://www.511pa.com/';
  paVideoUrl = '//pa511wmedia101.ilchost.com/live/';
  wmsAuthUrl = 'http://www.511pa.com/wowzKey.aspx';

  videoSrc = '';
  videoSourceSrc = '';
  wmsAuthSign = '';



  constructor(private httpClient:HttpClient) {


      this.getWmsAuth();

      //the follwing is not need now
      //set cookies for AWSSESSION_ID
      //  and CAMERAVIEWTYPE = video
      //  and AWSUSER_ID


      //then have a (local?) list of camera ids

      //urls in configs, probably


      //we need to start pulling the video and figure out 9e18858a-158e-4d00-98f7-83b9c81e4e0d


  }

    togglePlayPause() {
      alert('you suck');
    }

    getWmsAuth() {
        this.httpClient
            .get(this.wmsAuthUrl, {responseType: 'text'})
            .subscribe(data => {
                console.log(data);
                this.wmsAuthSign = data;
                this.setVideoSrcUrl(null);
            });
    }

    //just a part of setup
    setVideoSrcUrl(cam) {
      if (!cam) {
        cam = 'CAM-01-008';
      }
        this.videoSourceSrc = this.paVideoUrl + cam + '.stream/playlist.m3u8?wmsAuthSign=' + this.wmsAuthSign;
        this.videoSrc = 'blob:' + this.mainUrl + '9e18858a-158e-4d00-98f7-83b9c81e4e0d';
    }
}

import { Injectable }  from "@angular/core";
import * as tracksData from "../../../assets/content/tracks.json";
import * as track1     from "../../../assets/content/track_1_content.json";
import * as track2     from "../../../assets/content/track_2_content.json";
import * as track3     from "../../../assets/content/track_3_content.json";
import * as track4     from "../../../assets/content/track_4_content.json";
import * as track5     from "../../../assets/content/track_5_content.json";
import * as track6     from "../../../assets/content/track_6_content.json";
import { TrackInfo }   from "./track-info.interface";


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private traksInfo: Map<string, TrackInfo> = new Map<string, TrackInfo>();

  get tracks(): any {
    return tracksData;
  }

  trackInfo(trackId: string): TrackInfo {
    if (this.traksInfo.size === 0) {
      this.fillTrackInfo();
    }
    if (this.traksInfo.has(trackId)) {
      return this.traksInfo.get(trackId) || {} as TrackInfo;
    }
    return {} as TrackInfo;
  }

  private fillTrackInfo() {
    this.traksInfo.set(track1.id, track1);
    this.traksInfo.set(track2.id, track2);
    this.traksInfo.set(track3.id, track3);
    this.traksInfo.set(track4.id, track4);
    this.traksInfo.set(track5.id, track5);
    this.traksInfo.set(track6.id, track6);
  }
}

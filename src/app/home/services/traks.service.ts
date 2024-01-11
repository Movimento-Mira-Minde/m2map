import {Injectable} from "@angular/core";
import tracksData from "../../../assets/content/tracks_info.json";
import {TrackInfo} from "./track-info.interface";


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  get tracks(): TrackInfo[] {
    return tracksData;
  }

  trackInfo(trackId: string): TrackInfo {
    const item = this.tracks.filter(element => element.id === trackId)
    return item.length > 0 ?  item[0] : {} as TrackInfo;
  }
}

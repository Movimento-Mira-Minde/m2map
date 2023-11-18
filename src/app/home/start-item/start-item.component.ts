import { Component, Input } from '@angular/core';
import { TrackService }     from "../services/traks.service";
import { TrackInfo }        from "../services/track-info.interface";

@Component({
  selector: 'app-start-item',
  templateUrl: './start-item.component.html',
  styleUrls: ['./start-item.component.scss']
})
export class StartItemComponent {
  @Input() track: any;

  constructor(private tracService: TrackService) {
  }

  get trackInfo(): TrackInfo {
    return this.tracService.trackInfo(this.track?.id);
  }

}

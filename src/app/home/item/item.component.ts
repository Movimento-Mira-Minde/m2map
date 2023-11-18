import { Component }      from '@angular/core';
import { UntilDestroy }   from "@ngneat/until-destroy";
import { ActivatedRoute } from "@angular/router";
import { TrackService }   from "../services/traks.service";
import { TrackInfo }      from "../services/track-info.interface";

@UntilDestroy()
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  trackInfo: TrackInfo;

  constructor(private route: ActivatedRoute, private tracService: TrackService) {
    const trackId = this.route.snapshot.paramMap.get('trackId') || '';
    this.trackInfo = this.tracService.trackInfo(trackId);
  }


}

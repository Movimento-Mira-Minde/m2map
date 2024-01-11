import { Component, EventEmitter, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TrackService} from "../../../home/services/traks.service";
import {TrackInfo} from "../../../home/services/track-info.interface";

@Component({
  selector: 'app-map-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() showFilters = new EventEmitter<string>();
  trackInfo: TrackInfo;
  constructor(private route: ActivatedRoute, private tracService: TrackService) {
    const trackId = this.route.snapshot.paramMap.get('trackId') || '';
    this.trackInfo = this.tracService.trackInfo(trackId);
  }
  onFilterClick() {
    this.showFilters.emit('');
  }
}

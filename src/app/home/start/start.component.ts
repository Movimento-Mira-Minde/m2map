import { Component }    from '@angular/core';
import { TrackService } from "../services/traks.service";

export interface User {
  name: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent {

  constructor(public trackService: TrackService) {
  }
}

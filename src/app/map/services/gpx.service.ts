import { Injectable }    from '@angular/core';
import { FilterService } from "./filter.service";

@Injectable({
  providedIn: 'root',
})
export class GpxService {
  private marks = new Map<string, string>();

  constructor(private filters: FilterService) {


    this.marks.set('trees', '/assets/gpx/markers/trees.gpx');
    this.marks.set('lakes', '/assets/gpx/markers/lakes.gpx');
    this.marks.set('springs', '/assets/gpx/markers/springs.gpx');
    this.marks.set('others', '/assets/gpx/markers/others.gpx')
  }

  selectedMarkers() {
    return this.marks;
  }
}

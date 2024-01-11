import { TrackInfoProperties } from "./track-info-properties.interface";
import { TrackInfoElement }    from "./track-info-element.interface";

export interface TrackInfo {

  id: string,
  title: string,
  image: string,
  gpx: string,
  description: string,
  warning: string,
  properties: TrackInfoProperties,
  characteristics: TrackInfoElement[],
  indications: TrackInfoElement[],
}

import { Image } from "./crew.model";

export interface Destination{
  name: string;
  images: Image,
  description: string;
  distance: string;
  travel: string;
}

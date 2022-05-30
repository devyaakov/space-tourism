export interface Technology{
  name: string;
  images: TechnologyImage;
  description: string;
}

export interface TechnologyImage{
  portrait: string;
  landscape: string;
}

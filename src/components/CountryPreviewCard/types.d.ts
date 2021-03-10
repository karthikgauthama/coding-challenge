declare module 'CountryPreviewCard' {
  export type Flag = {
    svgFile: string;
  };
  export type CountryPreviewCard = {
    _id: number;
    alpha2Code: string;
    population: number;
    capital: string;
    flag: Flag;
    name: string;
  };
  export type Props = {
    data: CountryPreviewCard;
  };
}

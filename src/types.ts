export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string }>;
  };
  area: number;
  population: number;
  region: string;
  capital: string[];
  flags: { png: string; svg: string };
  ccn3: number;
  subregion: string;
  tld: string[0];
  currencies: Record<string, { name: string }>;
  languages: string[];
  borders?: string[];
}

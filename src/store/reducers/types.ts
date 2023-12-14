export interface IDriver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export interface ILocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: ILocation;
}
export interface IRace {
  season: string;
  round: number;
  url: string;
  raceName: string;
  Circuit: ICircuit;
  date: string;
}
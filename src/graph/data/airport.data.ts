import { Airport } from '../models';

export const airports: Airport[] = [
  Airport.PHX,
  Airport.BKK,
  Airport.JFK,
  Airport.LAX,
  Airport.LIS,
  Airport.MAD,
  Airport.CDG,
];

export const routes = [
  [Airport.PHX, Airport.LAX],
  [Airport.PHX, Airport.JFK],
  [Airport.JFK, Airport.BKK],
  [Airport.JFK, Airport.LAX],
  [Airport.MAD, Airport.LIS],
  [Airport.LIS, Airport.MAD],
  [Airport.LIS, Airport.CDG],
  [Airport.CDG, Airport.MAD],
  [Airport.LAX, Airport.PHX],
  [Airport.LAX, Airport.JFK],
  [Airport.JFK, Airport.PHX],
];

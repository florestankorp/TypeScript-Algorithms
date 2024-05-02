import { airports, routes } from './data';
import { Graph } from './graph';
import { Airport } from './models';

const bfs = new Graph<Airport>(airports, routes).breadthFirstSearch(
  Airport.PHX,
  Airport.LAX
);

const dfs = new Graph<Airport>(airports, routes).depthFirstSearch(
  Airport.PHX,
  Airport.LAX
);

console.log(bfs);
console.log(dfs);

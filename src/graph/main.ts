import { Graph } from '.';
import { airports, routes } from './data';
import { Airport } from './models';

function main(): void {
  const airportGraph = new Graph<Airport>(airports, routes);

  const bfs = airportGraph.breadthFirstSearch(Airport.PHX, Airport.LAX);
  const dfs = airportGraph.depthFirstSearch(Airport.PHX, Airport.LAX);

  console.log(bfs);
  console.log(dfs);
}

main();

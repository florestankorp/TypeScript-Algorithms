import { airports, routes } from './src/data';
import { Graph } from './src/graph';
import { Airport } from './src/models';

function main(): void {
  const airportGraph = new Graph<Airport>(airports, routes);

  const bfs = airportGraph.breadthFirstSearch(Airport.PHX, Airport.LAX);
  const dfs = airportGraph.depthFirstSearch(Airport.PHX, Airport.LAX);

  console.log(bfs);
  console.log(dfs);
}

main();

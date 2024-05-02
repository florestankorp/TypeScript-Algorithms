/* eslint-disable @typescript-eslint/parameter-properties */
/* eslint-disable @typescript-eslint/no-magic-numbers */

export class Graph<T> {
  private readonly adjacencyList = new Map<T, T | []>();

  public constructor(
    private readonly nodes: Readonly<T[]>,
    private readonly edges: readonly Readonly<T[]>[]
  ) {
    this.build();
  }

  /**
   * Implements the BFS algorithm
   *
   * @param start Starting node for the search
   * @param finish Goal to be reached by the search
   * @returns Array of all possible routes for the "start" and "finish" values
   */
  public breadthFirstSearch(start: T, finish: T): T[][] {
    const visited = new Set<T>();
    const queue = [[start]];
    const foundPaths: T[][] = [];

    while (queue.length) {
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      const path = queue.shift() as T[];
      const node = path[path.length - 1];
      const destinations = this.adjacencyList.get(node) as T[];

      for (const destination of destinations) {
        if (destination === finish) {
          foundPaths.push([...path, destination]);
        }

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push([...path, destination]);
        }
      }
    }

    return foundPaths;
  }

  /**
   * Implements the DFS algorithm
   *
   * @param start Starting node for the search, gets updated recursively
   * @param finish Goal to be reached by the search
   * @param visited Nodes that have been visited in previous iterations
   * @returns One possible route for the "start" and "finish" values
   */
  public depthFirstSearch(
    start: T,
    finish: T,
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    visited = new Set<T>()
  ): Set<T> | null {
    const destinations = this.adjacencyList.get(start) as T[];
    visited.add(start);

    for (const destination of destinations) {
      if (destination === finish) {
        visited.add(finish);
        return visited;
      }

      if (!visited.has(destination)) {
        const path = this.depthFirstSearch(destination, finish, visited);
        if (path) {
          return path;
        }
      }
    }

    return null;
  }

  private build(): void {
    this.nodes.forEach((node: Readonly<T>) => {
      this.addNode(node);
    });

    this.edges.forEach(([node1, node2]: Readonly<T[]>) => {
      this.addEdge(node1, node2);
    });
  }

  private addNode(node: T): void {
    this.adjacencyList.set(node, []);
  }

  private addEdge(origin: T, destination: T): void {
    (this.adjacencyList.get(origin) as T[]).push(destination);
    (this.adjacencyList.get(destination) as T[]).push(origin);
  }
}

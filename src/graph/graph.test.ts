import { describe, expect, test } from 'vitest';
import { Graph } from './graph';

describe('Graph', () => {
  const mockNodes = ['A', 'B', 'C', 'D'];
  const mockEdges = [
    ['A', 'C'],
    ['A', 'D'],
    ['C', 'B'],
    ['C', 'A'],
    ['A', 'B'],
    ['B', 'A'],
  ];
  describe('adjacencyList', () => {
    test('should generate possible destinations for each node', () => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const destinations = new Graph(mockNodes, mockEdges)['adjacencyList'];
      expect(destinations).toEqual(
        new Map([
          ['A', ['C', 'D', 'C', 'B', 'B']],
          ['B', ['C', 'A', 'A']],
          ['C', ['A', 'B', 'A']],
          ['D', ['A']],
        ])
      );
    });
  });

  describe('breadthFirstSearch', () => {
    test('should find ALL routes between "A"->"B"', () => {
      const breadthFirstSearch = new Graph<string>(
        mockNodes,
        mockEdges
      ).breadthFirstSearch('A', 'B');

      expect(breadthFirstSearch).toEqual([
        ['A', 'B'],
        ['A', 'B'],
        ['A', 'C', 'B'],
        ['A', 'C', 'A', 'B'],
        ['A', 'C', 'A', 'B'],
      ]);
    });

    test('should find ALL routes between "C"->"D"', () => {
      const breadthFirstSearch = new Graph<string>(
        mockNodes,
        mockEdges
      ).breadthFirstSearch('C', 'D');

      expect(breadthFirstSearch).toEqual([['C', 'A', 'D']]);
    });
  });

  describe('depthFirstSearch', () => {
    test('should find ONE route between "A"->"B"', () => {
      const result = new Graph<string>(mockNodes, mockEdges).depthFirstSearch(
        'A',
        'B'
      );

      expect(result).toEqual(new Set(['A', 'C', 'B']));
    });

    test('should find ONE route between "C"->"D"', () => {
      const breadthFirstSearch = new Graph<string>(
        mockNodes,
        mockEdges
      ).depthFirstSearch('C', 'D');

      expect(breadthFirstSearch).toEqual(new Set(['C', 'A', 'D']));
    });
  });
});

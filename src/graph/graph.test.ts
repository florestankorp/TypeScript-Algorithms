import { describe, expect, test } from 'vitest';
import { Graph } from './graph';
import { moreMockEdges, moreMockNodes } from './graph.fixtures';

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

  const classUnderTest = new Graph<string>(mockNodes, mockEdges);

  describe('adjacencyList', () => {
    test('should generate possible destinations for each node', () => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const destinations = new Graph(mockNodes, mockEdges)['adjacencyList'];
      expect(destinations).toEqual(
        new Map([
          ['A', ['C', 'D', 'B']],
          ['B', ['A']],
          ['C', ['B', 'A']],
          ['D', []],
        ])
      );
    });
  });

  describe('breadthFirstSearch', () => {
    test('should find ALL routes between "A"->"B"', () => {
      const searchResult = classUnderTest.breadthFirstSearch('A', 'B');
      expect(searchResult).toEqual([
        ['A', 'B'],
        ['A', 'C', 'B'],
        ['A', 'C', 'A', 'B'],
      ]);
    });

    test('should find ALL routes between "A"->"Z" with extended testdata', () => {
      const searchResult = new Graph<string>(
        moreMockNodes,
        moreMockEdges
      ).breadthFirstSearch('A', 'Z');
      expect(searchResult).toEqual([
        ['A', 'Z'],
        ['A', 'B', 'E', 'L', 'Z'],
        ['A', 'B', 'F', 'M', 'A', 'Z'],
      ]);
    });

    test('should find ALL routes between "C"->"D"', () => {
      const searchResult = classUnderTest.breadthFirstSearch('C', 'D');
      expect(searchResult).toEqual([['C', 'A', 'D']]);
    });
  });

  describe('depthFirstSearch', () => {
    test('should find ONE route between "A"->"B"', () => {
      const searchResult = classUnderTest.depthFirstSearch('A', 'B');
      expect(searchResult).toEqual(new Set(['A', 'C', 'B']));
    });

    test('should find ONE route between "C"->"D"', () => {
      const searchResult = classUnderTest.depthFirstSearch('C', 'D');
      expect(searchResult).toEqual(new Set(['C', 'B', 'A', 'D']));
    });
  });
});

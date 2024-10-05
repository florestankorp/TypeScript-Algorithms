import { describe, expect, test } from 'vitest';
import { Graph } from './graph';
import {
  mockEdgesBasic,
  mockEdgesExtended,
  mockNodesBasic,
  mockNodesExtended,
} from './graph.fixtures';

describe('Graph', () => {
  const graphBasicData = new Graph<string>(mockNodesBasic, mockEdgesBasic);
  const graphExtendedData = new Graph<string>(
    mockNodesExtended,
    mockEdgesExtended,
  );

  describe('adjacencyList', () => {
    test('should generate possible destinations for each node', () => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const destinations = graphBasicData['adjacencyList'];
      expect(destinations).toEqual(
        new Map([
          ['A', ['C', 'D', 'B']],
          ['B', ['A']],
          ['C', ['B', 'A']],
          ['D', []],
        ]),
      );
    });
  });

  describe('breadthFirstSearch', () => {
    test('should find ALL routes between "A"->"B"', () => {
      const searchResult = graphBasicData.breadthFirstSearch('A', 'B');
      expect(searchResult).toEqual([
        ['A', 'B'],
        ['A', 'C', 'B'],
        ['A', 'C', 'A', 'B'],
      ]);
    });

    test('should find ALL routes between "A"->"Z" with extended testdata', () => {
      const searchResult = graphExtendedData.breadthFirstSearch('A', 'Z');
      expect(searchResult).toEqual([
        ['A', 'Z'],
        ['A', 'B', 'E', 'L', 'Z'],
        ['A', 'B', 'F', 'M', 'A', 'Z'],
      ]);
    });

    test('should find ALL routes between "C"->"D"', () => {
      const searchResult = graphBasicData.breadthFirstSearch('C', 'D');
      expect(searchResult).toEqual([['C', 'A', 'D']]);
    });
  });

  describe('depthFirstSearch', () => {
    test('should find ONE route between "A"->"B"', () => {
      const searchResult = graphBasicData.depthFirstSearch('A', 'B');
      expect(searchResult).toEqual(new Set(['A', 'C', 'B']));
    });

    test('should find ONE route between "C"->"D"', () => {
      const searchResult = graphBasicData.depthFirstSearch('C', 'D');
      expect(searchResult).toEqual(new Set(['C', 'B', 'A', 'D']));
    });

    test('should find ONE route between "A"->"Z" with extended testdata', () => {
      const searchResult = graphExtendedData.depthFirstSearch('A', 'Z');
      expect(searchResult).toEqual(
        new Set(['A', 'B', 'E', 'K', 'W', 'X', 'L', 'Y', 'M', 'Z']),
      );
    });
  });
});

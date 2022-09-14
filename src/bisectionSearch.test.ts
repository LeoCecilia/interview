import { searchLeft, searchRight } from './bisectionSearch';

describe('searchLeft: test for besection search', () => {
  test('should return the leftmost insertion of index of value', () => {
    let arr = [1, 2, 7, 9];
    expect(searchLeft(arr, 5)).toBe(1);
  });
  test('when arr exist the value parameter, it should return the leftmost insertion of index that less than value', () => {
    let arr = [1, 2, 5, 7, 9, 5];
    expect(searchLeft(arr, 5)).toBe(1);
  });
  test('should return -1 when failed to find the index', () => {
    let arr = [1, 2, 5, 7, 9, 5];
    expect(searchLeft(arr, -100)).toBe(-1);
  });
  test('should return -1 when array is an empty value', () => {
    let arr: number[] = [];
    expect(searchLeft(arr, 1)).toBe(-1);
  });
  test('pass infinity to check what happen', () => {
    let arr = [1, 2, 5, 7, 9];
    expect(searchLeft(arr, Infinity)).toBe(4);
  });
  test('pass infinity to check what happen', () => {
    let arr = [1, 2, 5, 7, 9];
    expect(searchLeft(arr, -Infinity)).toBe(-1);
  });
});

describe('searchRight: test for besection search', () => {
  test('should return the leftmost insertion of index of value', () => {
    let arr = [1, 2, 7, 9];
    expect(searchRight(arr, 5)).toBe(1);
  });
  test('when arr exist the value parameter, it should return the leftmost insertion of index that less than or equal to the value', () => {
    let arr = [1, 2, 5, 7, 9];
    expect(searchRight(arr, 5)).toBe(2);
  });
  test('should return -1 when failed to find the index', () => {
    let arr = [1, 2, 5, 7, 9, 5];
    expect(searchRight(arr, -100)).toBe(-1);
  });
  test('should return -1 when array is an empty value', () => {
    let arr: number[] = [];
    expect(searchRight(arr, 1)).toBe(-1);
  });
  test('pass infinity to check what happen', () => {
    let arr = [1, 2, 5, 7, 9];
    expect(searchRight(arr, Infinity)).toBe(4);
  });
  test('pass infinity to check what happen', () => {
    let arr = [1, 2, 5, 7, 9];
    expect(searchRight(arr, -Infinity)).toBe(-1);
  });
});

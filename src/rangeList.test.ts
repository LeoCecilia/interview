import { RangeList } from './rangeList';

describe('test for the range list', () => {
  const orginalLog = global.console.log;
  beforeEach(() => {
    global.console.log = jest.fn();
  });
  afterEach(() => {
    global.console.log = orginalLog;
  });

  const rangeList = new RangeList();
  describe('when add an invalid range into the rangeList, it should not add successfully', () => {
    test('end value is greater than start value', () => {
      rangeList.add([2, 1]);
      expect(rangeList.print()).toBe(null);
    });

    // no need to test because already use strict mode in the typescript
    // test('pass array contains non integer element', () => {
    //   rangeList.add([null, 1]);
    //   expect(rangeList.print()).toBe(null);
    // });

    test('pass an empty array', () => {
      rangeList.add([]);
      expect(rangeList.print()).toBe(null);
    });

    // same as line 12-15
    // test('pass non array into rangeList', () => {
    //   rangeList.add(null);
    //   expect(rangeList.print()).toBe(null);
    // });
  });

  test('when add/remove valid range into the rangeList', () => {
    rangeList.add([1, 5]);
    expect(rangeList.print()).toBe('[1, 5)');

    rangeList.add([10, 20]);
    expect(rangeList.print()).toBe('[1, 5) [10, 20)');

    rangeList.add([5, 10]);
    expect(rangeList.print()).toBe('[1, 20)');

    rangeList.add([20, 20]);
    expect(rangeList.print()).toBe('[1, 20)');

    rangeList.add([29, 31]);
    rangeList.add([100, 200]);
    rangeList.add([30, 40]);
    expect(rangeList.print()).toBe('[1, 20) [29, 40) [100, 200)');

    // 10e9 means Math.pow(10, 9)
    rangeList.add([-10e9, 10e9]);
    expect(rangeList.print()).toBe(`[${-10e9}, ${10e9})`);

    rangeList.remove([-200, 400]);
    expect(rangeList.print()).toBe(`[${-10e9}, -200) [400, ${10e9})`);

    rangeList.remove([-10e9, -200]);
    expect(rangeList.print()).toBe(`[400, ${10e9})`);
  });

  test('print: check if this function really print something', () => {
    const str = rangeList.print();
    expect(global.console.log).toHaveBeenCalledWith(`should display: ${str}`);
  });

  test('print: if rangeList is an empty array', () => {
    rangeList.remove([400, 10e9]);
    rangeList.print();
    expect(global.console.log).toHaveBeenCalledWith(
      'current rangeList do not have any range, feel free to add one!',
    );
  });
});

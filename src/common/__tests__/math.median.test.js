import { calculateMedian } from '../math';

describe('Median tests', () => {
  const evenNumArrayData = [2.8, 2];
  const singleNumberArrayData = [1];
  const invalidDataSet = ['a', 'b'];

  afterEach(() => {
    console.error.mockClear();
  });

  it(`Assert that a value is returned when Median is called`, () => {
    expect(calculateMedian(singleNumberArrayData)).not.toBe(null);
    expect(calculateMedian(evenNumArrayData)).not.toBe(null);
  });
});

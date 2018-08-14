import { collectAllEven } from '../src/collect_all_even';

describe('collect_all_even', () => {
  const collectionA = [1, 2, 3, 4, 5];
  const collectionB = [2, 4];

  it('选出给定区间中所有的偶数', () => {
    const result = collectAllEven(collectionA);
    expect(result).toEqual(collectionB);
  });
});

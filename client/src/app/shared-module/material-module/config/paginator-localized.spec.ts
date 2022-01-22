import { PaginatorLocalized } from './paginator-localized';

describe('Paginator-localized', () => {
  let paginator: PaginatorLocalized;
  beforeEach(() => {
    paginator = new PaginatorLocalized();
  });

  it('should return correct RangeLabel if params (1, 25, 66)', () => {
    const label = paginator.getRangeLabel(0, 25, 66);
    expect(label).toBe('1 - 25 из 66');
  });

  it('should return correct RangeLabel if params (2, 25, 71)', () => {
    const label = paginator.getRangeLabel(1, 25, 71);
    expect(label).toBe('26 - 50 из 71');
  });

  it('should return correct RangeLabel if params (3, 50, 241)', () => {
    const label = paginator.getRangeLabel(3, 50, 241);
    expect(label).toBe('151 - 200 из 241');
  });

  it('should return correct RangeLabel if params (3, 50, 0)', () => {
    const label = paginator.getRangeLabel(3, 50, 0);
    expect(label).toBe('0 из 0');
  });

  it('should return correct RangeLabel if params (3, 0, 101)', () => {
    const label = paginator.getRangeLabel(3, 0, 101);
    expect(label).toBe('0 из 101');
  });
});

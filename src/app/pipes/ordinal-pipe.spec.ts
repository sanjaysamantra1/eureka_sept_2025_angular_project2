import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(21)).toBe('21 st');
    expect(pipe.transform(22)).toBe('22 nd');
    expect(pipe.transform(23)).toBe('23 rd');
    expect(pipe.transform(24)).toBe('24 th');
  });
});

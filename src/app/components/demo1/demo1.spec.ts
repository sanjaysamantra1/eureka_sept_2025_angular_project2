import { Demo1 } from "./demo1";

describe('Test Suite for Demo-1 Component', () => {  // test suite
  it('Should test add function', () => {
    const demo1 = new Demo1();
    expect(demo1.add(10, 20)).toBe(30);
    expect(demo1.add(-10, 20)).toBe(10);
    expect(demo1.add(10, -20)).toBe(-10);
    expect(demo1.add(-10, -20)).toBe(-30);
  })
  it('Should test multiplication function', () => {
    const demo1 = new Demo1();
    expect(demo1.mul(10, 20)).toBe(200);
    expect(demo1.mul(-10, 20)).toBe(-200);
    expect(demo1.mul(10, -20)).toBe(-200);
    expect(demo1.mul(-10, -20)).toBe(200);
  })
});

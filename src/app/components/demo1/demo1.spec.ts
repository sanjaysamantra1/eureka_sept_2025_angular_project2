import { Demo1 } from "./demo1";

describe('Test Suite for Demo-1 Component', () => {  // test suite
  let demo1: Demo1;

  beforeAll(() => {
    console.log('Before All...');
    demo1 = new Demo1();
  })
  beforeEach(() => {
    console.log('Before Each...')
  })
  afterEach(() => {
    console.log('After Each...')
  })
  afterAll(() => {
    console.log('After All...')
  })

  it('Should test add function', () => {
    console.log('This is It-1')
    // const demo1 = new Demo1();
    expect(demo1.add(10, 20)).toBe(30);
    expect(demo1.add(-10, 20)).toBe(10);
    expect(demo1.add(10, -20)).toBe(-10);
    expect(demo1.add(-10, -20)).toBe(-30);
  })
  it('Should test multiplication function', () => {
    console.log('This is It-2')
    // const demo1 = new Demo1();
    expect(demo1.mul(10, 20)).toBe(200);
    expect(demo1.mul(-10, 20)).toBe(-200);
    expect(demo1.mul(10, -20)).toBe(-200);
    expect(demo1.mul(-10, -20)).toBe(200);
  })
  it('Should test sumOfDigits function', () => {
    console.log('This is It-3')
    // const demo1 = new Demo1();
    expect(demo1.sumOfDigits(123)).toBe(6);
    expect(demo1.sumOfDigits(125)).toBe(8);
  })
  it('Should test addNewCar function', () => {
    console.log('This is It-4')
    // const demo1 = new Demo1();
    expect(demo1.cars).toBeDefined();
    expect(demo1.cars).toEqual(["Tata", 'Honda']);
    expect(demo1.cars).toContain("Tata");
    expect(demo1.cars).not.toContain("Maruti");
    expect(demo1.cars.length).toBe(2);
    expect(demo1.cars.length).not.toBe(3);
    demo1.addNewCar('Maruti');
    expect(demo1.cars).toBeDefined();
    expect(demo1.cars).toEqual(["Tata", 'Honda', 'Maruti']);
    expect(demo1.cars).toContain("Tata");
    expect(demo1.cars).toContain("Maruti");
    expect(demo1.cars).not.toContain("Toyota");
    expect(demo1.cars.length).toBe(3);
    expect(demo1.cars.length).not.toBe(2);
  })
});

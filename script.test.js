
describe('Calculator functions', () => {
  let display;
  let script;

  beforeAll(() => {
    document.body.innerHTML = `
    <div id="display">0</div>
    `;
    display = document.getElementById('display');
    script = require('./script');
  });

  afterEach(() => {
    script.reset();
  });

  test('addNumber function', () => {
    script.addNumber('5');
    expect(display.innerHTML).toBe('5');
  });

  test('sum equal function', () => {
    script.addNumber(5);
    script.addOperation('+');
    script.addNumber(5);
    script.equal();
    expect(display.innerHTML).toBe('10');
  });

  test('substraction equal function', () => {
    script.addNumber(5);
    script.addOperation('-');
    script.addNumber(2);
    script.equal();
    expect(display.innerHTML).toBe('3');
  });

  test('multiplication equal function', () => {
    script.addNumber(5);
    script.addOperation('*');
    script.addNumber(5);
    script.equal();
    expect(display.innerHTML).toBe('25');
  });

  test('division equal function', () => {
    script.addNumber(5);
    script.addOperation('/');
    script.addNumber(5);
    script.equal();
    expect(display.innerHTML).toBe('1');
  });

  test('addOperation function', () => {
    script.addOperation('+');
    expect(display.innerHTML).toBe('0');
  });

  test('should append a number to the existing display', () => {
    display.innerHTML = '1';
    script.addNumber('2');
    expect(display.innerHTML).toBe('12');
  });

  test('should not add a dot if one already exists', () => {
    display.innerHTML = '1.';
    script.addNumber('.');
    expect(display.innerHTML).toBe('1.');
  });

  test('should add a dot if zero display', () => {
    script.addNumber('.');
    expect(display.innerHTML).toBe('0.');
  });

  test('should add a dot if none exists', () => {
    display.innerHTML = '1';
    script.addNumber('.');
    expect(display.innerHTML).toBe('1.');
  });

  test('reset function', () => {
    script.addNumber('5');
    expect(display.innerHTML).toBe('5');
    script.reset();
    expect(display.innerHTML).toBe('0');
  });

  test('empty equal function', () => {
    script.equal();
    expect(display.innerHTML).toBe('0');
  });

  test('multiple operation equal function', () => {
    script.addNumber(5);
    script.addOperation('+');
    script.addNumber(5);
    script.addOperation('+');
    script.addNumber(5);
    script.equal();
    expect(display.innerHTML).toBe('15');
  });

});
const math=require("./math");
// to mock this we will destructure and mock one by one
/**
 * {
 * multiply,
 * subtract,
 * modulo
 * }
 */

// module mocking
jest.mock("./math");

/**
 * {
 * multiply:jest.fn(),
 * subtract:jest.fn(),
 * modulo:jest.fn()
 * }
 */

test("multiplication of 2 and 3 is 6", ()=>{
    math.multiply.mockReturnValueOnce(6);
    expect(math.multiply(2,3)).toBe(6);
})

test("subtraction of 6 and 3 is 3", ()=>{
    math.subtract.mockReturnValueOnce(3);
    expect(math.subtract(6,3)).toBe(3);
})

test("modulo of 6 and 2 is 3", ()=>{
    math.modulo.mockReturnValueOnce(0);
    expect(math.modulo(6,2)).toBe(0);
})
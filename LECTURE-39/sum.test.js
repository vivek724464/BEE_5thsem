let sum=jest.fn();//fucntion mocking ---> create a new function 
//by default sum will return undefined
// sum.mockReturnValue(5)

sum.mockReturnValueOnce(5);   // forces sum() to return 5 only once


// for this one time 5 is returned 
test("sum of 2 and 3 is 5", ()=>{
    expect(sum(2,3)).toBe(5);
})

//for this sum() returns undefined
test("sum of 2 and 3 is 5", ()=>{
    // sum.mockReturnValue(5)     // forces sum() to return always 5
    sum.mockReturnValueOnce(7)
    expect(sum(4,3)).toBe(7);
});

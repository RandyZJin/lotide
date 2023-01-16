const middle = require ("../middle");

const assert = require('chai').assert;


describe("#middle", () => {
  it("returns 6, 7 for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7, 8]), [6, 7]);
  });
  it("returns '[Lighthouse]' for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });

});
require('./example');

describe("Triplet", function() {

  function tripletProducts(triplets) {
    var products = [];
    for (var i = 0; i < triplets.length; i++) {
      var currentTriplet = triplets[i];
      products.push(currentTriplet.product());
    };
    return products;
  }

  it("sum",function() {
    var triplet = new Triplet(3,4,5);
    expect(triplet.sum()).toEqual(12);
  });

  it("product",function() {
    var triplet = new Triplet(3,4,5);
    expect(triplet.product()).toEqual(60);
  });

  it("pythagorean",function() {
    var triplet = new Triplet(3,4,5);
    expect(triplet.isPythagorean()).toBeTruthy();
  });

  it("not_pythagorean",function() {
    var triplet = new Triplet(5,6,7);
    expect(triplet.isPythagorean()).toBeFalsy();
  });

  it("triplets_upto_10",function() {
    var triplets = Triplet.where({ maxFactor: 10 });
    var products = tripletProducts(triplets);
    expect(products).toEqual([60, 480]);
  });

  it("triplets_from_11_upto_20",function() {
    var triplets = Triplet.where({ minFactor: 11, maxFactor: 20 })
    var products = tripletProducts(triplets);
    expect(products).toEqual([3840]);
  });

  it("triplets_where_sum_x",function() {
    var triplets = Triplet.where({ sum: 180, maxFactor: 100 })
    var products = tripletProducts(triplets);
    expect(products).toEqual([118080, 168480, 202500]);
  });

});
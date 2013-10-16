Triplet = function(a,b,c) {
  this.sides = [ a, b, c ];

  this.sum = function() {
    return this.sides.reduce(function(sideOne,sideTwo) {
      return sideOne + sideTwo;
    });
  };

  this.product = function() {
    return this.sides.reduce(function(sideOne,sideTwo) {
      return sideOne * sideTwo;
    });
  };

  this.isPythagorean = function() {
    return Math.pow(this.sides[0],2) + Math.pow(this.sides[1],2) == Math.pow(this.sides[2],2);
  }
};

Triplet.where = function() {
  return [];
};
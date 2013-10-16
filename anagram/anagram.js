var A,
    single_match;

A = GLOBAL.Anagram = function(word) {
  this.word = word;
  this.map = {};

  // fill map [char] -> [amount in word]
  var len = word.length,
      cur,
      new_val;

  for(var i = 0; i < len; i++) {
    cur = word[i];
    new_val = (this.map[cur] || 0) + 1;
    this.map[cur] = new_val;
  }
};

single_match = function(word_to_check) {
  if(this.word.length !== word_to_check.length) return false;
  var len = word_to_check.length,
      cur,
      new_val,
      map_to_check = {};

  // compare word_to_check's characters with this.map
  for(var i = 0; i < len; i++) {
    cur = word_to_check[i],
    new_val = (map_to_check[cur] || 0) + 1;
    map_to_check[cur] = new_val;
    if(new_val > (this.map[cur] || 0)) return false; // too much of this character? -> false
  }

  return true;
};

/**
* Checks whether given args are valid anagram
* match("test")             => true | false
* match(["test", "tset"])   => Array with matching words
*/
A.prototype.match = function(arg) {
  if(typeof arg === "string") {
    return single_match.call(this, arg);
  } else {
    var len = arg.length,
        cur,
        res = [];
    for(var i = 0; i < len; i++) {
      cur = arg[i];
      if(single_match.call(this, cur)) res.push(cur);
    }
    return res;
  }
};
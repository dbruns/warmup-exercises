require('./example');

describe("Array", function() {

  it("empty_keep",function() {
    var result = [].keep(function(e) {|e| return e < 10; });
    expect(result).toEqual([]);
    // assert_equal [], [].keep {|e| e < 10}
  });

  xit("keep_everything",function() {
    assert_equal [1, 2, 3], [1, 2, 3].keep {|e| e < 10}
  });

  xit("keep_first_and_last",function() {
    assert_equal [1, 3], [1, 2, 3].keep {|e| e.odd?}
  });

  xit("keep_neither_first_nor_last",function() {
    assert_equal [2, 4], [1, 2, 3, 4, 5].keep {|e| e.even?}
  });

  xit("keep_strings",function() {
    words = %w(apple zebra banana zombies cherimoya zelot)
    result = words.keep {|word| word.start_with?('z')}
    assert_equal %w(zebra zombies zelot), result
  });

  xit("keep_arrays",function() {
    rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5]
    ]
    result = rows.keep {|row| row.include?(5)}
    assert_equal [[5, 5, 5], [5, 1, 2], [1, 5, 2], [1, 2, 5]], result
  });

  xit("empty_discard",function() {
    assert_equal [], [].discard {|e| e < 10}
  });

  xit("discard_nothing",function() {
    assert_equal [1, 2, 3], [1, 2, 3].discard {|e| e > 10}
  });

  xit("discard_first_and_last",function() {
    assert_equal [2], [1, 2, 3].discard {|e| e.odd?}
  });

  xit("discard_neither_first_nor_last",function() {
    assert_equal [1, 3, 5], [1, 2, 3, 4, 5].discard {|e| e.even?}
  });

  xit("discard_strings",function() {
    words = %w(apple zebra banana zombies cherimoya zelot)
    result = words.discard {|word| word.start_with?('z')}
    assert_equal %w(apple banana cherimoya), result
  });

  xit("discard_arrays",function() {
    rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5]
    ]
    result = rows.discard {|row| row.include?(5)}
    assert_equal [[1, 2, 3], [2, 1, 2], [2, 2, 1]], result
  });

});
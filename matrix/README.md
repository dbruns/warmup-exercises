# Matrix

Write a program that, given a string representing a matrix of numbers, can
return the rows and columns of that matrix.

```plain
    0  1  2
  |---------
0 | 9  8  7
1 | 5  3  2
2 | 6  6  7
```

```ruby
matrix = Matrix.new("9 8 7\n5 3 2\n6 6 7")
matrix.rows
# => [[9, 8, 7], [5, 3, 2], [6, 6, 7]]
matrix.columns
# => [[9 5, 6], [8, 3, 6], [6, 6, 7]]
```

## Source
Warmup to the `saddle-points` warmup.


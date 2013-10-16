# Warm-Up Exercises

## Setup

Clone this repository.

```sh
git clone git@github.com:JumpstartLab/warmup-exercises.git
```

### Ruby

* Install [RVM](https://rvm.io/)
* Install [Ruby 2.0.0](http://www.ruby-lang.org/en/)

```bash
$ \curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled
```

### JavaScript & CoffeeScript

* Install [Node.js](http://nodejs.org/)
* Install [jasmine-node](https://github.com/mhevery/jasmine-node)

```bash
$ brew install node
$ npm install jasmine-node -g
```

Update the `~/.bash_profile` to include NPM binary files on the PATH:

```
export PATH=/usr/local/share/npm/bin:$PATH
```

### Clojure

* Install [Clojure](http://clojure.org)

```
brew install clojure
```

## Execution

### Ruby

```bash
$ cd WARMUP
$ ruby test.rb
```

### JavaScript

```bash
$ cd WARMUP
$ jasmine-node test.spec.js
```

### CoffeeScript

Jasmine-Node favors JavaScript files over CoffeeScript (even with the differing
file endings) so the test file named is named differently.

```bash
$ cd WARMUP
$ jasmine-node --coffee coffee.spec.coffee
```

### Clojure

```bash
$ cd WARMUP
$ clj test.clj
```

## Suggested Order

* bob
* word-count
* anagram
* beer-song
* nucleotide-count
* rna-transcription
* point-mutations
* phone-number
* grade-school
* robot-name
* leap
* etl
* meetup
* space-age
* grains
* gigasecond
* triangle
* scrabble-score
* roman-numerals
* binary
* prime-factors
* raindrops
* allergies
* strain
* atbash-cipher
* accumulate
* crypto-square
* trinary
* sieve
* simple-cipher
* octal
* luhn
* pig-latin
* pythagorean-triplet
* series
* difference-of-squares
* secret-handshake
* linked-list
* wordy
* hexadecimal
* largest-series-product
* kindergarden-garden
* binary-search-tree
* matrix
* robot (robot-name, robot-movement, robot-pivots, robot-simulator)
* nth-prime
* palindrome-products
* pascals-triangle
* say
* sum-of-multiples
* queen-attack
* saddle-points
* ocr-numbers

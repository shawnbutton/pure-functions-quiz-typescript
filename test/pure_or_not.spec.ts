import {
  PureOrNot,
  PureOrNot2,
  pure_or_not_3,
  pure_or_not_4,
  PureOrNot5,
  Total, PureOrNot6, PureOrNot7, pure_or_not_8
} from '../src/pure_or_not';

describe('Learning Hours Pure Functions Tests', () => {
  describe('is pure function', () => {
    it('gives expected results', () => {
      const sut = new PureOrNot();

      expect(sut.pure_or_not_1(99, 1)).toEqual(95);
      expect(sut.pure_or_not_1(1, 2)).toEqual(2);
      expect(sut.pure_or_not_1(0, -1)).toEqual(-1);
      expect(sut.pure_or_not_1(-1, -2)).toEqual(-2);
    });

    it('does not mutate first parameter', () => {
      const sut = new PureOrNot();

      const firstParam = 1;
      sut.pure_or_not_1(firstParam, 2);
      expect(firstParam).toEqual(1);
    });
  });

  describe('example 2', () => {
    it('results vary depending on state', () => {
      const sut = new PureOrNot2();

      expect(sut.pure_or_not_2(1)).toEqual('1, 1');
      sut.setX(2);
      expect(sut.pure_or_not_2(1)).toEqual('2, 1');
    });
  });

  describe('example 3', () => {
    it('gives expected results', () => {
      expect(pure_or_not_3('Bob')).toEqual('Hello, Bob');
      expect(pure_or_not_3('')).toEqual('Hello, World!');
    });
  });

  describe('example 4 is not pure as writes to console', () => {
    it('gives expected results', () => {
      expect(pure_or_not_4('Bob')).toBe(undefined);
      expect(pure_or_not_4('')).toBe(undefined);
    });
  });

  describe('example 5', () => {
    it('gives expected results', () => {
      const sut = new PureOrNot5();

      const total = new Total(1);

      expect(sut.pure_or_not_5(total)).toEqual(new Total(2));
      sut.setX(2);
      expect(sut.pure_or_not_5(total)).toEqual(new Total(4));
    });

    it('mutates the total', () => {
      const sut = new PureOrNot5();

      const total = new Total(1);

      sut.pure_or_not_5(total);
      expect(total.total).toEqual(2);
    });
  });

  describe('example 6', () => {
    it('gives expected results', () => {
      const sut = new PureOrNot6();

      const total = new Total(1);

      expect(sut.pure_or_not_6(total, 2)).toEqual(new Total(3));
    });

    it('mutates the total', () => {
      const sut = new PureOrNot6();

      const total = new Total(1);

      sut.pure_or_not_6(total, 2);
      expect(total.total).toEqual(3);
    });
  });

  describe('example 7', () => {
    it('gives expected results', () => {
      const sut = new PureOrNot7();

      const total = new Total(1);

      expect(sut.pure_or_not_7(total, 2)).toEqual(new Total(3));
    });

    it('does not mutate the total', () => {
      const sut = new PureOrNot7();

      const total = new Total(1);

      sut.pure_or_not_7(total, 2);
      expect(total.total).toEqual(1);
    });
  });

  describe('example 8', () => {
    it('gives expected results', () => {
      expect(pure_or_not_8()).toEqual('not found');
      process.env.API_KEY = 'a key';
      expect(pure_or_not_8()).toEqual('a key');
    });

  });

});

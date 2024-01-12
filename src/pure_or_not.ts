/** eslint-disable @typescript-eslint/no-unused-vars /*
 /**
 Attribution: Includes material from [Emily Bache](https://sammancoaching.org/society/contributors/emilybache.html) - ProAgile - [sammancoaching.org](https://sammancoaching.org/)
 */
export class PureOrNot {
  public pure_or_not_1(n1: number, n2: number): number {
    if (n1 > 0) {
      n1 -= 4;
      return Math.max(n1, n2);
    }
    return n2;
  }
}

export class PureOrNot2 {
  private x = 1;

  public pure_or_not_2(n: number): string {
    return this.x + ', ' + n;
  }

  public setX(x: number): void {
    this.x = x;
  }
}

export const pure_or_not_3 = (s: string): string => {
  if (s !== '') {
    return 'Hello, ' + s;
  } else {
    return 'Hello, World!';
  }
};

export function pure_or_not_4(s: string): void {
  if (s !== '') {
    console.log('Hello, ' + s);
  } else {
    console.log('Hello, World!');
  }
}

export class Total {
  constructor(public total: number) { }
}

export class PureOrNot5 {
  private x = 1;

  public pure_or_not_5(running_total: Total): Total {
    running_total.total += this.x;
    return running_total;
  }

  public setX(x: number): void {
    this.x = x;
  }
}

export class PureOrNot6 {
  public pure_or_not_6(running_total: Total, increment: number): Total {
    running_total.total += increment
    return running_total;
  }
}

export class PureOrNot7 {
  public pure_or_not_7(running_total: Total, increment: number): Total {
    return new Total(running_total.total + increment)
  }
}

export function pure_or_not_8(): string {
  const apikey = process.env.API_KEY;
  return apikey ?? 'not found'
}






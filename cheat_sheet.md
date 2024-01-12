1) This is a pure function. It changes the first parameter in the code, but since numbers are passed by value it doesn't affect the calling code.
```
class PureOrNot {
  public pure_or_not_1(n1: number, n2: number): number {
    if (n1 > 0) {
      n1 -= 4;
      return Math.max(n1, n2);
    }
    return n2;
  }
}

```

2) This is not a pure function because the field ```x``` is outside the scope of the function.
```
class PureOrNot2 {
  private x = 1;

  public pure_or_not_2(n: number): string {
    return this.x + ', ' + n;
  }

  public setX(x: number): void {
    this.x = x;
  }
}
```
3) This is a pure function.
```
const pure_or_not_3 = (s: string): string => {
  if (s !== '') {
    return 'Hello, ' + s;
  } else {
    return 'Hello, World!';
  }
};
```
4) This is not a pure function since it writes to the console
```
function pure_or_not_4(s: string): void {
  if (s !== '') {
    console.log('Hello, ' + s);
  } else {
    console.log('Hello, World!');
  }
}
```
5) This is not a pure function since it depends on ```x```. Also, it mutates the parameter ```running_total```.
```
class PureOrNot5 {
  private x = 1;

  public pure_or_not_5(running_total: Total): Total {
    running_total.total += this.x;
    return running_total;
  }

  public setX(x: number): void {
    this.x = x;
  }
}
```
6) This is not a pure function since it mutates the parameter ```running_total```.
```
class PureOrNot6 {
  public pure_or_not_6(running_total: Total, increment: number): Total {
    running_total.total += increment
    return running_total;
  }
}
```
7) This is a pure function since it returns a new copy of ```running_total```
```
class PureOrNot7 {
  public pure_or_not_7(running_total: Total, increment: number): Total {
    return new Total(running_total.total + increment)
  }
}
```
8) This is not a pure function because it reads from an environment variable
```
function pure_or_not_8(): string {
  const apikey = process.env.API_KEY;
  return apikey ?? 'not found'
}
```

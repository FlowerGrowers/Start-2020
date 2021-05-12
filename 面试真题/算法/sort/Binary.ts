class Binary {
  private list: number[] = [];
  private realNum: number;
  constructor(list: number[], real: number) {
    this.list = list;
    this.realNum = real;
  }
  getIndex(): number | null {
    let length = this.list.length;
    let low = 0;
    let hight = length - 1;
    while (low <= hight) {
      let mid = Math.floor((low + hight) / 2);
      let guess = this.list[mid];
      if (guess === this.realNum) {
        return mid;
      } else if (guess < this.realNum) {
        low = this.list[mid + 1];
      } else {
        hight = this.list[mid - 1];
      }
    }
    return null;
  }
}

let tempArr = new Array(10).fill(1).map((_, index) => {
  return index + 1;
});

let result = new Binary(tempArr, 5).getIndex();
console.log(result);

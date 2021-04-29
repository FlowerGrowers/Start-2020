class Sort2 {
  constructor(private array: number[]) {
    this.sort();
    this.print();
  }

  private sort() {
    /** 冒泡
     * 1. 数组两两(相邻) 排序 如果较大的就放到后面
     */

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i; j++) {
        if (this.less(this.array[j + 1], this.array[j])) {
          this.exch(this.array, j + 1, j);
        }
      }
    }
  }

  private less(pre: number, next: number): boolean {
    return pre < next;
  }

  private exch(array: number[], i: number, min: number) {
    [array[i], array[min]] = [array[min], array[i]];
  }

  private print() {
    for (const value of this.array) {
      console.log(value);
    }
  }
}

new Sort2([5, 4, 3, 2, 1]);

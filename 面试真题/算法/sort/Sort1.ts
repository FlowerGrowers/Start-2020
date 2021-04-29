class Sort<T = number> {
  constructor(private array: T[]) {}

  public sort() {
    /** 选择排序
     * 1. 在数组中先找出最小的值 放到数组开头
     */
    for (let i = 0; i < this.array.length; i++) {
      let min = i;
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.less(this.array[j], this.array[min])) {
          this.exch(this.array, j, min);
        }
      }
    }
  }

  public print() {
    for (const value of this.array) {
      console.log(value);
    }
  }

  private less(pre: T, next: T): boolean {
    return pre < next;
  }

  private exch(array: T[], i: number, min: number) {
    [array[min], array[i]] = [array[i], array[min]];
  }
}

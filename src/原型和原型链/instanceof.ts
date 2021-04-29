// 模拟 instanceof 关键字

class NewInstanceOf {
  public isProperty(leftValue: object, rightValue: any): boolean {
    let rightProto = rightValue.prototype;
    leftValue = Object.getPrototypeOf(leftValue);
    while (1) {
      if (leftValue === rightProto) {
        return true;
      } else if (leftValue === null) {
        return false;
      }
      leftValue = Object.getPrototypeOf(leftValue);
    }
  }
}

console.log(new NewInstanceOf().isProperty([], Number));

import DataHelper from "./DataHelper";
import ItemData from "../dataModel/ItemData";
class ActionHelper {
  dateHelper: DataHelper = new DataHelper("memoList", "id");
  memoList!: Array<ItemData>;

  constructor() {
    this.memoList = this.readData();
  }

  readData(): Array<ItemData> {
    let arr = this.dateHelper.readData();
    let itemArr: Array<ItemData> = arr.map((v: any) => {
      let item: ItemData = new ItemData();
      item.id = v.id;
      item.categoryId = v.categoryId;
      item.title = v.title;
      item.content = v.content;
      item.time = v.time;
      return item;
    });
    return itemArr;
  }

  add(item: ItemData): void {
    if (this.memoList.length == 0) {
      item.id = 1;
    } else {
      item.id = this.memoList[this.memoList.length - 1].id + 1;
    }
    this.memoList.push(item);
    this.dateHelper.saveData(this.memoList);
  }

  edit(item: ItemData): void {
    this.memoList.forEach((v) => {
      if (v.id == item.id) {
        v.categoryId = item.categoryId;
        v.title = item.title;
        v.content = item.content;
        v.time = item.time
      }
    });
    this.dateHelper.saveData(this.memoList);
  }

  remove(id: number): void {
    this.memoList.forEach((v, i) => {
      if (v.id == id) {
        this.memoList.splice(i, 1);
      }
    });
    this.dateHelper.saveData(this.memoList);
  }
}

export default ActionHelper;

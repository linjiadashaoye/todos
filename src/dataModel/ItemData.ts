import Category from "./CateEnum";

class ItemData {
  categoryId!: Category;
  id!: number;
  title!: string;
  content!: string;
  time!: string;

  constructor(
    id: number = -1,
    categoryId: Category = -1,
    title: string = "",
    content: string = "",
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.time = this.formatTime(Date.now());
  }

  formatTime(time: number): string {
    let t = new Date(time);
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    let day = t.getDate();
    let hours = t.getHours();
    let minutes = t.getMinutes();
    let formatTime =
      year + "-" + month + "-" + day + " " + hours + ":" + minutes;
    return formatTime;
  }
}

export default ItemData
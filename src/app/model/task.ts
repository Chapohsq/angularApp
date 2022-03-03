export class Task {
  name: string;
  comment?: string;
  id: string;

  tag?: string[];

  creationDate: Date;
  doneDate?: Date;
  dueDate?: Date;

  priority: number;
  repeat?: number;
  constructor(name: string, priority = 0) {

    this.name = name;
    this.priority = priority;
    this.creationDate = new Date();
    this.id = this.name.split(" ")[0]+(Math.random()*100000000)
  }
}


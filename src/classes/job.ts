import BaseJob from "./baseJob";

export default class Job extends BaseJob {
  public id: number;

  constructor(data: Job) {
    super(data);
    this.id = data.id;
  }
}

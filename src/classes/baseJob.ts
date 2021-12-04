export default class BaseJob {
  public automatic: boolean;
  public error: string;
  public final_location: string;
  public handler: string;
  public hostname: string;
  public ip: string;
  public save_location: string;
  public status: string;
  public url: string;

  constructor(data: BaseJob) {
    this.automatic = data.automatic;
    this.error = data.error;
    this.final_location = data.final_location;
    this.handler = data.handler;
    this.hostname = data.hostname;
    this.ip = data.ip;
    this.save_location = data.save_location;
    this.status = data.status;
    this.url = data.url;
  }
}

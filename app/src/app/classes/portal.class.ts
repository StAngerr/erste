export class Portal {
  private name: string;
  private votes: number;
  private url: string;

  constructor(name: string, votes: number, url: string) {
    this.name = name;
    this.votes = votes;
    this.url = url;
  }

  public voteUp() {
    this.votes++;
  }

  public voteDown() {
    this.votes--;
  }

  public getName() {
    return this.name;
  }

  public getUrl() {
    return this.url;
  }

  public getVotes() {
    return this.votes;
  }
}

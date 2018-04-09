export class Post {
  constructor(public id: number,
              public title: string,
              public content: string,
              public loveIts: number = 0,
              public created_at: Date) {
  }
}

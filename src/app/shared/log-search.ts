export class LogSearch {

    constructor(
		public CurrentPage: number = 1, 
		public PageSize: number = 100000000, 
        public SearchText?: string,
		public LogCategory?: number,

	) {}

    toString(): string {
        console.log(this)
        let res = `?CurrentPage=${this.CurrentPage}&PageSize=${this.PageSize}`;
        if (this.SearchText) {
          res += `&SearchText=${this.SearchText}`;
        }
        if (this.LogCategory !== null && this.LogCategory !== undefined) {
          res += `&LogCategory=${this.LogCategory}`;
        }
        return res;
      }

}

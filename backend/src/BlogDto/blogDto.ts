export interface IUserBlog {
    title: string;
    content: string;
    CreatorId: string;
    creatorName: string
}

export interface IBlog extends IUserBlog {
    id: number;
    date: string;
}

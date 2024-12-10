export interface IUserBlog {
    title: string;
    content: string;
    CreatorId: string;
    creatorName: string
    blogLike: number
}

export interface IBlog extends IUserBlog {
    id: number;
    date: string;
}

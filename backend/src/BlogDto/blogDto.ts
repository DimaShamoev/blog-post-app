export interface IUserBlog {
    author: string,
    title: string
    content: string
    date: string
}

export interface IBlog extends IUserBlog {
    id: number
}
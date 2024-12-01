export interface IUserBlog {
    author: string
    title: string
    content: string
}

export interface IBlog extends IUserBlog {
    id: number
    date: string
}
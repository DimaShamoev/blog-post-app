export interface IUserBlog {
    title: string
    content: string
}

export interface IBlog extends IUserBlog {
    id: number
}
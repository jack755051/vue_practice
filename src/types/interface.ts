export interface newsItem {
    id:string
    newsTitle: string;
    newsContent?: string;
    publishDate?: Date | string;
}

export type article = Pick<newsItem, 'id' | 'newsContent'>;

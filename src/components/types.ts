export interface IllustInfo {
    id: string;
    title: string;
    illustType: number;
    xRestrict: number;
    restrict: number;
    sl: number;
    url: string;
    description: string;
    tags: string[];
    userId: string;
    userName: string;
    width: number;
    height: number;
    pageCount: number;
    isBookmarkable: boolean;
    bookmarkData?: any;
    alt: string;
    createDate: string;
    updateDate: string;
    isUnlisted: boolean;
    isMasked: boolean;
    profileImageUrl: string;
}
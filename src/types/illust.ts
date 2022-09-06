export interface Url {
    mini: string;
    thumb: string;
    small: string;
    regular: string;
    original: string;
}

export interface Tag {
    tag: string;
    locked: boolean;
    deletable: boolean;
    userId: string;
    userName: string;
}

export interface Tag {
    authorId: string;
    isLocked: boolean;
    tags: Tag[];
    writable: boolean;
}

export interface Responsive {
    url: string;
}

export interface Rectangle {
    url: string;
}

export interface Header {
    url: string;
}

export interface Footer {
    url: string;
}

export interface ExpandedFooter {
    url: string;
}

export interface Logo {
    url: string;
}

export interface Relatedwork {
    url: string;
}

export interface ZoneConfig {
    responsive: Responsive;
    rectangle: Rectangle;
    header: Header;
    footer: Footer;
    expandedFooter: ExpandedFooter;
    logo: Logo;
    relatedworks: Relatedwork;
}

export interface AlternateLanguage {
    ja: string;
    en: string;
}

export interface Ogp {
    description: string;
    image: string;
    title: string;
    type: string;
}

export interface Twitter {
    description: string;
    image: string;
    title: string;
    card: string;
}

export interface Meta {
    title: string;
    description: string;
    canonical: string;
    alternateLanguages: AlternateLanguage;
    descriptionHeader: string;
    ogp: Ogp;
    twitter: Twitter;
}

export interface ExtraData {
    meta: Meta;
}

export interface TitleCaptionTranslation {
    workTitle?: any;
    workCaption?: any;
}

export interface Translation {
    ja: string;
}

export interface Successor {
    tag: string;
    translation: Translation;
}

export interface Current {
    ja: string;
}

export interface Breadcrumb {
    successor: Successor[];
    current: Current;
}

export interface TitleCaptionTranslation {
    workTitle?: any;
    workCaption?: any;
}

export interface ZengoIdWork {
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
    titleCaptionTranslation: TitleCaptionTranslation;
    createDate: string;
    updateDate: string;
    isUnlisted: boolean;
    isMasked: boolean;
    profileImageUrl: string;
}

export interface NextWork {
    id: string;
    title: string;
}

export interface PrevWork {
    id: string;
    title: string;
}

export interface ZengoWorkData {
    nextWork: NextWork;
    prevWork: PrevWork;
}

export interface NoLoginData {
    breadcrumbs: Breadcrumb;
    zengoIdWorks: ZengoIdWork[];
    zengoWorkData: ZengoWorkData;
}

export interface Body {
    illustId: string;
    illustTitle: string;
    illustComment: string;
    id: string;
    title: string;
    description: string;
    illustType: number;
    createDate: string;
    uploadDate: string;
    restrict: number;
    xRestrict: number;
    sl: number;
    urls: Url;
    tags: Tag;
    alt: string;
    storableTags: string[];
    userId: string;
    userName: string;
    userAccount: string;
    likeData: boolean;
    width: number;
    height: number;
    pageCount: number;
    bookmarkCount: number;
    likeCount: number;
    commentCount: number;
    responseCount: number;
    viewCount: number;
    bookStyle: string;
    isHowto: boolean;
    isOriginal: boolean;
    imageResponseOutData: any[];
    imageResponseData: any[];
    imageResponseCount: number;
    pollData?: any;
    seriesNavData?: any;
    descriptionBoothId?: any;
    descriptionYoutubeId?: any;
    comicPromotion?: any;
    fanboxPromotion?: any;
    contestBanners: any[];
    isBookmarkable: boolean;
    bookmarkData?: any;
    contestData?: any;
    zoneConfig: ZoneConfig;
    extraData: ExtraData;
    titleCaptionTranslation: TitleCaptionTranslation;
    isUnlisted: boolean;
    request?: any;
    commentOff: number;
    noLoginData: NoLoginData;
}

export interface IllustFullInfoResponse {
    error: boolean;
    message: string;
    body: Body;
}
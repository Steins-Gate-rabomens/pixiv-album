export interface TitleCaptionTranslation {
    workTitle?: any;
    workCaption?: any;
}

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
    titleCaptionTranslation: TitleCaptionTranslation;
    createDate: string;
    updateDate: string;
    isUnlisted: boolean;
    isMasked: boolean;
    profileImageUrl: string;
}

export interface BookmarkRange {
    min?: any;
    max?: any;
}

export interface IllustManga {
    data: IllustInfo[];
    total: number;
    bookmarkRanges: BookmarkRange[];
}

export interface TitleCaptionTranslation {
    workTitle?: any;
    workCaption?: any;
}

export interface Recent {
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

export interface TitleCaptionTranslation {
    workTitle?: any;
    workCaption?: any;
}

export interface Permanent {
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

export interface Popular {
    recent: Recent[];
    permanent: Permanent[];
}

export interface Header {
    url: string;
}

export interface Footer {
    url: string;
}

export interface Infeed {
    url: string;
}

export interface ZoneConfig {
    header: Header;
    footer: Footer;
    infeed: Infeed;
}

export interface AlternateLanguage {
    ja: string;
    en: string;
}

export interface Meta {
    title: string;
    description: string;
    canonical: string;
    alternateLanguages: AlternateLanguage;
    descriptionHeader: string;
}

export interface ExtraData {
    meta: Meta;
}

export interface Body {
    illustManga: IllustManga;
    popular: Popular;
    relatedTags: string[];
    tagTranslation: any[];
    zoneConfig: ZoneConfig;
    extraData: ExtraData;
}

export interface SearchIllustResponse {
    error: boolean;
    body: Body;
}
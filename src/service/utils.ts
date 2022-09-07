import {PIXIV_HOST, PROXY} from "../config/proxy";

export const TYPE_REGULAR = "regular";
export const TYPE_ORIGINAL = "original";

export function toImgProxyUrl(id: string, type: string = "original", page: number = 0) {
    return `${PROXY}/${id}/${page}?t=${type}`
}

export function toCoverProxyUrl(origin: string) {
    return origin.replace(PIXIV_HOST, PROXY)
}
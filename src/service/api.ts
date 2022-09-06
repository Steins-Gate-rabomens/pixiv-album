import {IllustInfo, SearchIllustResponse} from "../types/search";
import {get} from "../ajax/ajax";
import {IllustFullInfoResponse, Body} from "../types/illust";

export function searchIllust(keyword: string, page: number, callback: (infos: IllustInfo[]) => void) {
    console.log(page);
    console.log(keyword);
    get(`https://okabebot-pixiv.herokuapp.com/artworks/${keyword}?p=${page}`, (response: SearchIllustResponse) => {
        console.log(response);
        callback(response.body.illustManga.data);
        console.log(response.body.illustManga.data);
    });
}

export function getIllustInfo(pid: string, callback: (info: Body) => void) {
    get(`https://okabebot-pixiv.herokuapp.com/api/${pid}`, (response: IllustFullInfoResponse) => {
        callback(response.body);
        console.log(response.body);
    });
}
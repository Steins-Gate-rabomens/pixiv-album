import {IllustInfo, SearchIllustResponse} from "../components/types";
import {get} from "../ajax/ajax";

export function searchIllust(keyword: string, page: number, callback: (infos: IllustInfo[]) => void) {
    get(`https://okabebot-pixiv.herokuapp.com/artworks/${keyword}?p=${page}`, (response: SearchIllustResponse) => {
        callback(response.body.illustManga.data);
        // console.log(response.body.illustManga.data);
    });
}
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import {IllustInfo} from "./types";

// example:
// {
// "id": "101028348",
//     "title": "雷",
//     "illustType": 0,
//     "xRestrict": 0,
//     "restrict": 0,
//     "sl": 2,
//     "url": "https://i.pximg.net/c/250x250_80_a2/img-master/img/2022/09/06/00/59/18/101028348_p0_square1200.jpg",
//     "description": "",
//     "tags": [
//     "原神",
//     "雷电将军",
//     "雷電将軍",
//     "女の子"
// ],
//     "userId": "21779673",
//     "userName": "北に偏る",
//     "width": 3840,
//     "height": 2160,
//     "pageCount": 1,
//     "isBookmarkable": true,
//     "bookmarkData": null,
//     "alt": "#原神 雷 - 北に偏るのイラスト",
//     "titleCaptionTranslation": {
//     "workTitle": null,
//         "workCaption": null
// },
// "createDate": "2022-09-06T00:59:18+09:00",
//     "updateDate": "2022-09-06T00:59:18+09:00",
//     "isUnlisted": false,
//     "isMasked": false,
//     "profileImageUrl": "https://i.pximg.net/user-profile/img/2022/04/06/12/59/51/22508128_583b5b905ad591386c3b631f55425a25_50.jpg"
// }

interface Props {
    info: IllustInfo
}

export default function Illustration(props: Props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia
                component="img"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={props.info.url}
                alt="暂时无法加载"
            />
            <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.info.title}
                </Typography>
                <Typography>
                    {props.info.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">查看</Button>
            </CardActions>
        </Card>
    )
}
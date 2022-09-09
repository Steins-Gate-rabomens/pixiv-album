import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";
import {IllustInfo} from "../types/search";
import {Avatar, CardActionArea, Chip, Stack} from "@mui/material";
import '../css/illust.css'
import {toCoverProxyUrl, toImgProxyUrl, TYPE_REGULAR} from "../service/utils";
import axios from "axios";
import {PercentCircularProgress} from "./progress";

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
    const [info, setInfo] = useState(props.info);
    const [uri, setUri] = useState("");
    const [progressPercent, setProgressPercent] = useState(0);
    useEffect(() => {
        setInfo(props.info);
        setLoaded(false);
        axios.get(toImgProxyUrl(props.info.id, TYPE_REGULAR), {
            responseType: "blob",
            onDownloadProgress: (event: ProgressEvent) => {
                if (event.lengthComputable) {
                    let percent = Math.floor(event.loaded / event.total * 100);
                    setProgressPercent(percent);
                }
            },
        }).then((response) => {
            let uri = URL.createObjectURL(response.data);
            setUri(uri);
            setLoaded(true);
        }).catch((error) => {
            console.log(error);
        })
    }, [props.info]);

    const [loaded, setLoaded] = useState(false);
    return (
        <Card sx={{display: 'flex', flexDirection: 'column'}}>
            <CardActionArea href={"/illust/" + info.id}>
                {loaded && <CardMedia
                    component="img"
                    // image={toCoverProxyUrl(info.url)}
                    image={uri}
                    onLoad={() => {
                        setLoaded(true);
                    }}
                    alt=""
                    className={`${!loaded && "height-0"}`}
                />}
                {!loaded && <PercentCircularProgress value={progressPercent}/>}
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {info.title}
                    </Typography>
                    <Typography gutterBottom>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar alt={info.userName} src={toCoverProxyUrl(info.profileImageUrl)}/>
                            <p>{info.userName}</p>
                        </Stack>
                    </Typography>
                    {/*<Typography gutterBottom>*/}
                    {/*    {(new Date(info.createDate)).toDateString()}*/}
                    {/*</Typography>*/}
                    {info.tags != undefined && info.tags.map((tag) =>
                        <Chip label={tag}/>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
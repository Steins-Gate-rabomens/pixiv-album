import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";
import {IllustInfo} from "../types/search";
import {Box, CardActionArea, Chip, CircularProgress, Container} from "@mui/material";
import '../css/illust.css'

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
    useEffect(() => {
        setInfo(props.info);
        setLoaded(false);
    }, [props.info]);

    const [loaded, setLoaded] = useState(false);
    return (
        <Card sx={{display: 'flex', flexDirection: 'column'}}>
            <CardActionArea href={"/" + info.id}>
                <CardMedia
                    component="img"
                    image={"https://okabebot-pixiv.herokuapp.com/" + info.id + "?t=regular"}
                    onLoad={() => {
                        setLoaded(true);
                    }}
                    alt=""
                    className={`${!loaded && "height-0"}`}
                />
                {!loaded && <Box sx={{display: 'flex'}}>
                    <Container>
                        <CircularProgress/>
                    </Container>
                </Box>}
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {info.title}
                    </Typography>
                    <Typography gutterBottom>
                        画师：{info.userName}
                    </Typography>
                    <Typography gutterBottom>
                        {(new Date(info.createDate)).toDateString()}
                    </Typography>
                    {info.tags != undefined && info.tags.map((tag) =>
                        <Chip label={tag}/>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
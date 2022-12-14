import {Body} from "../types/illust";
import React, {useEffect, useState} from "react";
import {Box, Button, Container, Grid, Link, Stack} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import {toImgProxyUrl, TYPE_ORIGINAL} from "../service/utils";
import {LinearWithValueLabel} from "./progress";
import axios from "axios";

interface Props {
    info: Body
}

export default function IllustBrowser(props: Props) {
    const [idx, setIdx] = useState(0);
    const [uri, setUri] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);
    const maxIdx = props.info.pageCount - 1;

    const loadIllust = (page: number) => {
        axios.get(toImgProxyUrl(props.info.id, TYPE_ORIGINAL, page), {
            responseType: "blob",
            onDownloadProgress: (event: ProgressEvent) => {
                if (event.lengthComputable) {
                    setProgressPercent(Math.ceil(event.loaded / event.total * 100));
                }
            },
        }).then((response) => {
            let uri = URL.createObjectURL(response.data);
            setUri(uri);
            setLoaded(true);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        loadIllust(0);
    }, [props.info]);

    const browser = () => {
        return (
            <Grid container direction={"row"} justifyContent="center" alignItems="center">
                <Grid item>
                    <Box
                        component="img"
                        alt=""
                        sx={{
                            width: "100%",
                            height: "100%"
                        }}
                        className={`${!loaded && "height-0"}`}
                        src={uri}>
                    </Box>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center" direction="row">
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon/>} disabled={idx === 0}
                            onClick={() => {
                                setIdx(idx - 1);
                                setLoaded(false);
                                setProgressPercent(0);
                                loadIllust(idx - 1);
                            }}>
                        ?????????
                    </Button>
                    <Link href="/">
                        <Button variant="outlined" startIcon={<HomeIcon/>}>
                            ????????????
                        </Button>
                    </Link>
                    <Button variant="outlined" startIcon={<ArrowForwardIosIcon/>} disabled={idx === maxIdx}
                            onClick={() => {
                                setIdx(idx + 1);
                                setLoaded(false);
                                setProgressPercent(0);
                                loadIllust(idx + 1);
                            }}>
                        ?????????
                    </Button>
                </Grid>
            </Grid>
        )
    };
    const progress = () => {
        return (
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={3}>
                    <LinearWithValueLabel progress={progressPercent}/>
                </Grid>
            </Grid>
        )
    };

    return (
        <div>
            {loaded && browser()}
            {!loaded && progress()}
        </div>
    )
}
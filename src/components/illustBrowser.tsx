import {Body} from "../types/illust";
import React, {useState} from "react";
import {Button, Container, Grid, Link, Stack} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import '../css/illust.css'

interface Props {
    info: Body
}

export default function IllustBrowser(props: Props) {
    const [idx, setIdx] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const maxIdx = props.info.pageCount - 1;

    return (
        <Grid>
            <Grid>
                <Container
                    component="img"
                    sx={{
                        // maxHeight: "md",
                        // maxWidth: "md"
                    }}
                    alt=""
                    className={`${!loaded && "height-0"}`}
                    src={`https://okabebot-pixiv.herokuapp.com/${props.info.id}/${idx}`}
                    onLoad={() => {
                        setLoaded(true);
                    }}>
                </Container>
            </Grid>
            <Grid sx={{py: "15px"}}>
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon/>} disabled={idx === 0}
                            onClick={() => {
                                setIdx(idx - 1);
                                setLoaded(false);
                            }}>
                        前一张
                    </Button>
                    <Link href="/">
                        <Button variant="outlined" startIcon={<HomeIcon/>}>
                            返回主页
                        </Button>
                    </Link>
                    <Button variant="outlined" startIcon={<ArrowForwardIosIcon/>} disabled={idx === maxIdx}
                            onClick={() => {
                                setIdx(idx + 1);
                                setLoaded(false);
                            }}>
                        后一张
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}
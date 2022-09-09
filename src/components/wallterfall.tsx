import {IllustInfo} from "../types/search";
import Grid from "@mui/material/Grid";
import Illustration from "./illustration";
import * as React from "react";
import {ReactElement, useEffect, useState} from "react";

interface Props {
    illustInfos: IllustInfo[]
}

export default function Waterfall(props: Props) {
    const [illusts, setIllusts] = useState(props.illustInfos);
    useEffect(() => {
        setIllusts(props.illustInfos);
    }, [props.illustInfos]);

    const waterfall = () => {
        let illustCols = Array<Array<ReactElement>>();
        for (let i = 0; i < 3; i++) {
            illustCols.push(new Array<ReactElement>())
        }
        let heights = [0, 0, 0];
        illusts.map((illust) => {
            let thisHeight = illust.height / illust.width * 256;
            if (isNaN(thisHeight)) {
                return;
            }
            let minIdx = 0;
            let min = heights[0];
            for (let i = 1; i < 3; i++) {
                if (heights[i] < min) {
                    minIdx = i;
                    min = heights[i];
                }
            }
            heights[minIdx] += thisHeight;
            illustCols[minIdx].push(
                <Grid item>
                    <Illustration info={illust}/>
                </Grid>
            );
        });

        return (
            <Grid container direction="row" spacing={2} justifyContent="space-between">
                {illustCols.map((col) =>
                    <Grid item xs={12} sm={4} md={4} spacing={2}>
                        <Grid container direction="column" spacing={2}>
                            {col}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        )
    };

    return waterfall();
}
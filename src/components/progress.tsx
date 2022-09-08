import React, {useEffect, useState} from "react";
import {Box, CircularProgress, CircularProgressProps} from "@mui/material";
import LinearProgress, {LinearProgressProps} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export function LinearIndeterminate() {
    return (
        <Box sx={{width: '100%'}}>
            <LinearProgress/>
        </Box>
    );
}

interface Props {
    progress: number
}

export function LinearWithValueLabel(props: Props) {
    const [progress, setProgress] = useState(props.progress);

    useEffect(() => {
        setProgress(props.progress);
    }, [props.progress]);

    return (
        <Box sx={{width: '100%'}}>
            <LinearProgressWithLabel value={progress}/>
        </Box>
    );
}

export function PercentCircularProgress(props: CircularProgressProps & { value: number }) {
    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}
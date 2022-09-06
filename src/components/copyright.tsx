import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Steins-Gate-rabomens/pixiv-album">
                pixiv-album@github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
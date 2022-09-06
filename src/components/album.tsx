import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import PaletteIcon from '@mui/icons-material/Palette';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AlbumInput from "./input";
import Illustration from "./illustration";
import {IllustInfo} from "./types";

function Copyright() {
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

const exampleIllust = {
    alt: "",
    createDate: "",
    description: "",
    height: 0,
    id: "101028348",
    illustType: 0,
    isBookmarkable: false,
    isMasked: false,
    isUnlisted: false,
    pageCount: 0,
    profileImageUrl: "",
    restrict: 0,
    sl: 0,
    tags: [],
    title: "雷",
    updateDate: "",
    url: "https://i.pximg.net/c/250x250_80_a2/img-master/img/2022/09/06/00/59/18/101028348_p0_square1200.jpg",
    userId: "",
    userName: "",
    width: 0,
    xRestrict: 0
} as IllustInfo;

const illusts = [exampleIllust, exampleIllust, exampleIllust];

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PaletteIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Pixiv Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <AlbumInput/>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {illusts.map((info, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Illustration info={info}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Maintained by okabe bot
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
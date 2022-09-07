import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import PaletteIcon from '@mui/icons-material/Palette';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AlbumInput from "./input";
import {IllustInfo} from "../types/search";
import {searchIllust} from "../service/api";
import {Pagination} from "@mui/material";
import {Copyright} from "./copyright";
import Waterfall from "./wallterfall";

const theme = createTheme();

export default function Album() {
    const [illusts, setIllusts] = useState(Array<IllustInfo>);
    const [page, setPage] = useState(0);
    const [currentInput, setCurrentInput] = useState("");
    const search = (keyword: string) => {
        searchIllust(keyword, 1, setIllusts);
        setPage(1);
        setCurrentInput(keyword);
    };

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
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <AlbumInput onSearch={search}/>
                    </Container>
                </Box>
                <Container sx={{py: 8}}>
                    <Waterfall illustInfos={illusts}/>
                </Container>
                {
                    page > 0 && <Container sx={{py: 8}}>
                        <Pagination page={page} count={page + 1} onChange={(_, value) => {
                            setPage(value);
                            searchIllust(currentInput, value, setIllusts);
                        }}/>
                    </Container>
                }
            </main>
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
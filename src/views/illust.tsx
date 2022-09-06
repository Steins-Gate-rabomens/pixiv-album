import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PaletteIcon from "@mui/icons-material/Palette";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Copyright} from "../components/copyright";
import {getIllustInfo} from "../service/api";
import {Body} from "../types/illust";
import Container from "@mui/material/Container";
import IllustBrowser from "../components/illustBrowser";

const theme = createTheme();

export function IllustView() {
    const {pid} = useParams();
    const [illustInfo, setIllustInfo] = useState({} as Body);

    useEffect(() => {
        if (pid !== undefined) {
            getIllustInfo(pid, setIllustInfo);
        }
        return () => {
        }
    }, []);

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
                    <Container sx={{py: 8}}>
                        <IllustBrowser info={illustInfo}/>
                    </Container>
                </Box>
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
    )
}
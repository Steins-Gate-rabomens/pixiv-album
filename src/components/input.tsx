import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";

interface Props {
    onSearch: (value: string) => void
}

export default function AlbumInput(props: Props) {
    const [input, setInput] = useState("");

    return (
        <Paper
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                props.onSearch(input)
            }}
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
        >
            <IconButton sx={{p: '10px'}} aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="搜索图片"
                inputProps={{'aria-label': 'search google maps'}}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={() => {
                props.onSearch(input)
            }}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
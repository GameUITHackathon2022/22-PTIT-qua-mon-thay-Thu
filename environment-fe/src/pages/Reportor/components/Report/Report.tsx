import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import { useAppSelector } from 'app/hooks';

type Props = {};

export default function Report() {
    const report = useAppSelector((state) => state.report);
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
                overflow: 'scroll',
            }}
        >
            <Typography variant='h6' gutterBottom>
                {report.data?.title}
                <Chip
                    color='primary'
                    label={
                        report.data && report.data.status
                            ? report.data.status
                            : 'Đang chờ xử lý'
                    }
                />
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                26/11/2022
            </Typography>
            <Divider />
            <Typography variant='body1' gutterBottom>
                {report.data?.description}
            </Typography>
            <img
                src={`https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/rptkbun/2022_07_04/hinh2-rac-tren-kenh-te-5-7-2363.jpg?w=164&h=164&fit=crop&auto=format`}
                srcSet={`https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/rptkbun/2022_07_04/hinh2-rac-tren-kenh-te-5-7-2363.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt=''
                width={250}
                loading='lazy'
            />
        </Paper>
    );
}

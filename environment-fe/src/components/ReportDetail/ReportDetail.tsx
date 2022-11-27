import React from 'react';
import { Paper, Typography, Stack, Box } from '@mui/material';
import './ReportDetail.scss';
import { useAppSelector } from 'app/hooks';
type Props = {};

const ReportDetail = (props: Props) => {
    const report = useAppSelector((state) => state.report);
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography component='h2' variant='h2' color='primary'>
                {report.data?.title}
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
                Đăng lúc 26/11/2022 - Thanh.nn
            </Typography>
            <Typography variant='body1' gutterBottom>
                {report.data?.description}
            </Typography>
            <div>
                <Typography variant='h6'>Hình ảnh minh họa</Typography>
                <Box className='rp-detail__image'>
                    <Stack
                        direction='row'
                        sx={{
                            width: 250,
                            height: 250,
                            objectFit: 'contain',
                        }}
                        spacing={1}
                    >
                        <img
                            alt=''
                            src='https://source.unsplash.com/random/800x800/?img=1'
                        />
                    </Stack>
                </Box>
            </div>
        </Paper>
    );
};

export default ReportDetail;

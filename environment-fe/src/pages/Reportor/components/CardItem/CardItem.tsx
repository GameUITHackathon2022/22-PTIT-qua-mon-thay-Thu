import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardItem({
    title = 'Phản hồi của tôi',
    number = '199',
}) {
    return (
        <Card>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    sx={{ fontSize: 20 }}
                    color='text.secondary'
                    gutterBottom
                >
                    {number}
                </Typography>
            </CardContent>
        </Card>
    );
}

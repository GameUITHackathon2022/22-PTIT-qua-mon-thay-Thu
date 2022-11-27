import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './Reports.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Report } from 'services/reportAPI';
type Props = {};

export default function Reports() {
    const reports = useAppSelector((state) => state.reports);
    const dispatch = useAppDispatch();
    const handleClickRp = (report: Report) => {
        dispatch({ type: 'report/setReport', payload: report });
    };
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                height: 500,
                overflowY: 'scroll',
            }}
            className='reportor__reportlist'
        >
            {reports.data.map((rp) => (
                <React.Fragment key={rp.id}>
                    <ListItem
                        alignItems='flex-start'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClickRp(rp)}
                    >
                        <ListItemText
                            primary={rp.title}
                            secondary={
                                <React.Fragment>
                                    {rp.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider component='li' />
                </React.Fragment>
            ))}
        </List>
    );
}

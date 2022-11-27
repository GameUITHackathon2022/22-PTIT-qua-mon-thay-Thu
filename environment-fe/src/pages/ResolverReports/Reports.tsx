import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { useNavigate } from 'react-router';
import Title from './Title';

function cutString(str: string, maxLength: number) {
    const suffix = str && str.length > maxLength ? '...' : '';
    return str.substring(0, maxLength) + suffix;
}

function createDate(
    id: number,
    date: string,
    title: string,
    description: string,
    author: string,
    image: string
) {
    return { id, date, title, description, author, image };
}

const rows = [
    createDate(
        1,
        '12:42 PM 26/11/2022',
        'Gần nhà tôi đầy rác',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.',
        'user1',
        'https://source.unsplash.com/random/800x800/?img=1'
    ),
    createDate(
        2,
        '12:42 PM 26/11/2022',
        'Gần nhà tôi đầy rác',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.',
        'user2',
        'https://source.unsplash.com/random/800x800/?img=1'
    ),
    createDate(
        3,
        '12:42 PM 26/11/2022',
        'Gần nhà tôi đầy rác',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.',
        'user3',
        'https://source.unsplash.com/random/800x800/?img=1'
    ),
    createDate(
        4,
        '12:42 PM 26/11/2022',
        'Gần nhà tôi đầy rác',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.',
        'user4',
        'https://source.unsplash.com/random/800x800/?img=1'
    ),
];

function Reports() {
    const reports = useAppSelector((state) => state.reports);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function handleOnClick(row: any) {
        dispatch({ type: 'report/setReport', payload: row });
        navigate('/resolver/report');
    }
    return (
        <React.Fragment>
            <Title>Danh sách báo cáo</Title>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Tiêu đề</TableCell>
                        <TableCell>Mô tả</TableCell>
                        <TableCell>Trạng thái</TableCell>
                        <TableCell>Vị trí</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.data.map((row) => (
                        <TableRow
                            key={row.id}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleOnClick(row)}
                        >
                            <TableCell>{row.title}</TableCell>
                            <TableCell>
                                {cutString(row.description, 40)}
                            </TableCell>
                            <TableCell>
                                {row.status || 'Đã tiếp nhận'}
                            </TableCell>
                            <TableCell>{row.district}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default Reports;

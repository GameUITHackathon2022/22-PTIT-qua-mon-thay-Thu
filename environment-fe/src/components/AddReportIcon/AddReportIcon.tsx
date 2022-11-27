import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddReportModal from '../AddReportModal';
import './AddReportIcon.scss';

type Props = {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
};

const AddReportIcon: React.FC<Props> = ({
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    return (
        <React.Fragment>
            <AddReportModal open={open} setOpen={setOpen} />
            <Fab
                color='primary'
                aria-label='add'
                className='add-report'
                style={{
                    top: top,
                    left: left,
                    right: right,
                    bottom: bottom,
                    color: 'secondary',
                }}
                onClick={handleOpenModal}
            >
                <AddIcon />
            </Fab>
        </React.Fragment>
    );
};

export default AddReportIcon;

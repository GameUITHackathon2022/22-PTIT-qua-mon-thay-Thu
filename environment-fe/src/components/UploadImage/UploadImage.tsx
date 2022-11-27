import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

type Props = {
    file: File | null;
    setFile: any;
};

export default function UploadImage({ file, setFile }: Props) {
    const imgFile = React.useRef(null);
    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
    };
    return (
        <React.Fragment>
            <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
            >
                <input
                    ref={imgFile}
                    hidden
                    accept='image/*'
                    type='file'
                    onChange={handleChange}
                />
                <PhotoCamera />
            </IconButton>
            {file && <p>{file.name}</p>}
        </React.Fragment>
    );
}

import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';

function Preparation() {
    return (
        <div className="center-block text-center">
            <div className="preparation-icon center-block text-black-50">
                <ConstructionIcon sx={{ fontSize: 60 }} />
            </div>
            <h1 className="mt-4 h4 fw-bold">公開準備中ページ</h1>
            <p className="mt-4">現在、ページの準備を進めております<br/>今しばらくお待ちください</p>
        </div>
    );
}

export default Preparation;
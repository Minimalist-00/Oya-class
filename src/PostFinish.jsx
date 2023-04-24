import React from'react';
import { Link } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function PostFinish(){
    return(
        // <div>
        //     <h2>投稿が完了しました</h2>
        //     
        // </div>
        <div className="center-block text-center">
            <div className="complete-icon center-block text-success">
                <TaskAltIcon sx={{ fontSize: 60 }} />
            </div>
            <h1 className="mt-4 h4 fw-bold pb-4"><span className="highlighter">投稿が完了しました</span></h1>
            <Link to='/Home_Teacher' className='go-back-top'>トップページで確認する</Link>
        </div>
    )
}

export default PostFinish;
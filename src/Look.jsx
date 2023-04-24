import React from 'react';
import { Link } from 'react-router-dom';


export function Look0(props) {
    const list0 = props.school.map(
        (c) => {
            return (
                <div className='mx-2'>
                    <Link to={'/detail0/' + c.id} className=''>
                        <p className='home-notice-data'>{c.date}</p>
                        <div className="right-allow">
                            <div className="dli-chevron-right" />
                        </div>
                        <div className="hnt-box">
                            <p className='home-notice-title'>{c.detail}</p>
                        </div>
                    </Link>
                    <div className='border-bottom pt-2 mb-2' />
                </div>
            )
        }
    )

    return (
        <div>
            <h2 className='title border-bottom mx-2'>学校からのお知らせ</h2>
            <p>{list0}</p>
        </div>
    )

}

export function Look1(props) {
    const list1 = props.myclass.map(
        (c) => {
            return (
                <div className='mx-2'>
                    <Link to={'/detail1/' + c.id}>
                        <p className='home-notice-data'>{c.date}</p>
                        <div className="right-allow">
                            <div className="dli-chevron-right" />
                        </div>
                        <div className="hnt-box">
                            <p className='home-notice-title'>{c.detail}</p>
                        </div>
                    </Link>
                    <div className='border-bottom pt-2 mb-2' />
                </div>
            )
        }
    )

    return (
        <div>
            <h2 className='title border-bottom mx-2'>クラス内でのお知らせ</h2>
            <p>{list1}</p>
        </div>
    )
}
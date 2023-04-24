import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const tentativeAlbum = [
    { id: 0, date: "2023.02.18", title: "修学旅行", img: "IMG_8914" },
    { id: 1, date: "2023.01.12", title: "社会科見学", img: "IMG_8910" },
    { id: 2, date: "2022.10.24", title: "音楽祭", img: "IMG_8915" },
    { id: 3, date: "2022.09.17", title: "運動会", img: "IMG_8916" },
    { id: 4, date: "2022.06.19", title: "やがえふ", img: "IMG_8917" },
    { id: 5, date: "2022.05.06", title: "遠足", img: "IMG_8918" },
    { id: 6, date: "2022 - 2023", title: "日常生活", img: "IMG_8919" },
    { id: 7, date: "2022 - 2023", title: "その他", img: "IMG_8920" }
]

function Home_Teacher(props) {
    const list0 = props.school.slice(0, 3).map(
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

    const list1 = props.myclass.slice(0, 3).map(
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

    const albumList = tentativeAlbum.slice(0, 4).map(
        (album) => {
            return (
                <div className="col ps-4 pb-4">
                    <img className="w-100 pb-1 border" src={album.img + '.jpg'} onClick={() => alert("アルバムのページは現在準備中です。")} />
                    <p className="album">{album.date}<br />{album.title}</p></div>

            )
        }
    )

    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div>
            <div className="pb-5">
                <div className='top-box'>
                    <div className='ps-1 pb-1'>{format(new Date(), "yyyy年M月d日 E")}</div>
                    <div className='ps-1 pb-4'>学校：あり | 行事：なし</div>
                </div>
                <div className="notice-post-botton pb-5">
                    <Link to={'/post'}>お知らせを投稿<PostAddIcon className='ms-2' /></Link>
                </div>
                <h2 className='title border-bottom mx-2'>学校からのお知らせ</h2>
                <p className="subtitle">{list0}</p>
                <div className="see-more"><Link to={'/look0'}  >もっと見る</Link></div>
            </div>
            <div className='pb-5'>
                <h2 className='title border-bottom mx-2'>クラス内でのお知らせ</h2>
                <p className="subtitle">{list1}</p>
                <p className="see-more"><Link to={'/look1'}>もっと見る</Link></p>
            </div>
            <div className='pb-5'>
                <h2 className="title">アルバム</h2>
                <div className="row row-cols-2 pb-2">
                    {albumList}
                </div>
                <p className="see-more"><Link to={'/album'}>アルバム一覧</Link></p>
            </div>
            <div className="pb-5">
                <h2 className="title">時間割</h2>
                <img className="w-100" src='/jikanwari.jpg' />
            </div>
            <div className="pb-5">
                <h2 className="title">学年暦</h2>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="ja" // 日本語化
                    events={[
                        { title: "閉庁", start: "2022-12-29", end: "2023-01-04" },
                        { title: "節分", start: "2023-02-03" },
                        { title: "テスト週間", start: "2023-02-14", end: "2023-02-22" },
                    ]}
                />
            </div>
            <p id="page-top">
                <a onClick={returnTop}>Page Top</a>
            </p>
            <footer>
                <div className="footer mt-3 border-top">
                    <ul className='menu'>
                        <li className="pb-1 footer-link" style={{ fontSize: "14px" }}><Link to="/Preparation">〇〇小学校ホームページ</Link></li>
                        <li className="pb-1 footer-link" style={{ fontSize: "14px" }}><Link to="/Preparation">サイトの制作にあたって</Link></li>
                        <li className="pb-1 footer-link" style={{ fontSize: "14px" }}><Link to="/DesignProposal">プロジェクト案</Link></li>
                    </ul>
                    <p className="pt-4 pb-3" style={{ fontSize: "13px" }}>&copy; 2023 Oya class</p>
                </div>
            </footer>
        </div>
    );
}


export default Home_Teacher;
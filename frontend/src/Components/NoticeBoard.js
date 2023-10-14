import Axios from "axios";
import { useEffect, useState } from "react";
import './NB.css'
const NoticeBoard = () => {
    const createMarkup = (html) => {
        return { __html: html };
      };

      
    const [ALLNews, setAllNews] = useState([])

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/getLatestNews').then((e) => {
            console.log(e);
            setAllNews(e.data.reverse());
        }).catch((err) => {
            console.log(err);
        })
    },[])


    return (
        <main>
            {/* <h1>Latest Updates</h1> */}
            <div className="cards">
            {ALLNews.map((item, index) => {
                // let dd = '<p>helo</p>'
                    const inputDate = new Date(item.created_at);
                    // Options for formatting
                    const options = {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    };
                    
                    // Convert the date to the desired format
                    const formattedDate = inputDate.toLocaleString('en-US', options);
                return (
                    <div key={index} className="card">
                        <div className="card-body">
                        <h1 className="NoticeTitle">{item.noticeTitle}</h1>
                        <p className="NoticeDate">{formattedDate}</p>
                            <p className="card-text"
                            dangerouslySetInnerHTML={createMarkup(item.noticeContent)}

                            ></p>
                            <a href={item.links} clLinkss="btn btn-primary">Know more</a>
                        </div>
                    </div>
                )
               
            })}
            </div>
        </main>
    )
}

export default NoticeBoard;
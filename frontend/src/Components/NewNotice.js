import Axios from "axios"
import { useEffect, useState } from "react"
import "./NB.css"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

export const NewNotice = () => {
    const [Links, setLinks] = useState('')
    const [noticeContent, setnoticeContent] = useState('')
    const [NoticeTitle, setNoticeTitle] = useState('')


    const AddNotice = () => {
        Axios.post('http://127.0.0.1:8000/api/acceptData', {
            noticeContent: noticeContent,
            links: Links,
            noticeTitle: NoticeTitle
        }).then((e) => {
            console.log(e)
            document.getElementById('Alert').append(
                
            )
            Axios.post('https://onesignal.com/api/v1/notifications', {
                "included_segments": ["Total Subscriptions"],
                contents: {
                    en: "New Announcement",
                    es: 'New Announcement',
                },
                headings: {
                    en: 'GNDEC Athletix',
                },
                app_id: 'b43f2c6a-d041-4329-914a-88b27eb0605c',
            }, {
                headers: {
                    Authorization: "Basic MmZmMTBiNTQtYmI5MC00ZGNlLTgwODAtYTI2YTdiZjYyNGMw",
                    "Content-Type": "application/json"
                }

            }
            ).then((res) => {
                console.log(res);
                alert('Notice Added')
            }).catch((err) => {
                console.log(err);
                // showToast('Error in sending notification', 3000)
            })
        }).catch((err) => {
            console.log(err);
            alert(err.response.data.message)
        })
    }

    useEffect(() => {
        console.log(Links, noticeContent);
    }, [Links, noticeContent])


    return (
        <main>
            <div id="Alert">              
            
            </div>
            <div className="form">
                <input type="text" onChange={(e) => { setNoticeTitle(e.target.value) }} placeholder="Notice Title" name="noticeTitle" />
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Enter new Notice here </p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setnoticeContent(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <input type="text" onChange={(e) => { setLinks(e.target.value) }} placeholder="important url" name="links" />
                <button className="button" onClick={AddNotice}>Add Notice</button>
            </div>
        </main>
    )
}

export default NewNotice
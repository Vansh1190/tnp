import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NoticeBoard from './Components/NoticeBoard';
import NewNotice from './Components/NewNotice';
import { useEffect, useState } from 'react';
import OneSignal from 'react-onesignal';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {

    if (!initialized) {
      OneSignal.init({ appId: 'b43f2c6a-d041-4329-914a-88b27eb0605c' }).then((e) => {
        setInitialized(true);
        console.log(e)
        OneSignal.Slidedown.promptPush().then(() => {
          // OneSignal.getNotificationPermission((e) => {
          //   console.log('PEMRission', e)
          // })
        });
      })
    }

}, [])

return (
  //  <form action="http://127.0.0.1:8000/acceptData" method='POST'>
  //  <input type="hidden" name="_token" value={'wdw5wdwdw8d4w84d8w4d8w4d4w84dw84d8w48d4w84'} />
  // <input type="text" name='Name' /> <br />
  // <input type="text" name='Branch' /> <br />
  // <input type="submit" />
  //  </form>
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/addNotice' element={<NewNotice />} />
      <Route path='/notice' element={<NoticeBoard />} />
    </Routes>
    {/* <HomePage /> */}
  </BrowserRouter>
);
}

export default App;

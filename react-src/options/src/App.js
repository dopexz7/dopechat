import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import HeaderNav from './comps/HeaderNav';
import Sidebar from './comps/Sidebar';
import OtherSettings from './pages/OtherSettings';
import HighlightingSettings from './pages/HighlightingSettings';
import ReadabilitySettings from './pages/ReadabilitySettings';
import UsernamesSettings from './pages/UsernamesSettings';
import TextSettings from './pages/TextSettings';
import ChatSettings from './pages/ChatSettings';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Router>
        <div className="border-2 border-darker-purple backdrop-blur-sm shadow-lg flex max-w-screen-xl h-[95vh] overflow-hidden w-[95vw] rounded-2xl text-base font-medium relative">
          <Sidebar />
          <div className="flex flex-col grow relative">
            <HeaderNav />
            <div className="flex flex-col p-[30px] flex-grow overflow-auto max-w-[1280px] w-full anim">
              <div className="flex flex-col w-full">
                <div className="flex items-center lg:flex-row flex-col">
                  <div className="flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                    <div className="text-white lg:text-xl font-bold tracking-wider mb-3">Latest updates</div>
                    <div className="flex flex-col px-7 p-3 border-2 border-darker-purple rounded-3xl">
                      <div className="text-main-white lg:text-sm w-2/4 font-normal tracking-wider mb-3 mt-3">
                        <div className="font-bold text-white">Official website, extension reworked and improved!</div>
                      </div>
                      <div className="flex flex-row items-center pb-2.5">
                        <a
                          href="https://dopechat.ddns.net"
                          className="border-2 px-4 py-1.5 rounded-2xl text-center font-bold content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
                        >
                          Check out our new website!
                        </a>
                        <a
                          href="https://dopechat.ddns.net/#section3"
                          className="ml-3 border-2 px-4 py-1.5 rounded-2xl text-center font-bold content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
                        >
                          See changelog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Routes>
                <Route path="*" element={<Main />} />
                <Route exact path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="/chat-settings" element={<ChatSettings />} />
                <Route path="/text-settings" element={<TextSettings />} />
                <Route path="/readability-settings" element={<ReadabilitySettings />} />
                <Route path="/other-settings" element={<OtherSettings />} />
                <Route path="/highlighting-settings" element={<HighlightingSettings />} />
                <Route path="/usernames-settings" element={<UsernamesSettings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

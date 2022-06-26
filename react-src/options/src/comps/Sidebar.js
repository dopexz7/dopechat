import { Link, useLocation } from 'react-router-dom';
import { SidebarData, SidebarData2, SidebarData3 } from './SidebarData';

export default function Sidebara() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <div className="bg-darker-purple w-60 h-full p-8 flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden duration-500">
      <div className="py-0 w-52 ">
        <div className="text-lg text-main-white mb-3 duration-500">dopeChat</div>
      </div>
      <div className="py-6 w-40">
        <div className="text-sm text-accent-white mb-3 duration-500">main</div>
        <div className="flex flex-col px-3">
          {SidebarData.map((item, index) => {
            return (
              <Link
                className="group flex items-center text-body-color text-base cursor-pointer"
                to={item.path}
                key={index}
              >
                <div
                  className={` ${
                    splitLocation[1] === item.path
                      ? 'group-hover:text-white text-white flex py-2 '
                      : 'group-hover:text-white text-main-white flex py-2'
                  } flex items-center group-hover:scale-110 duration-300 text-body-color cursor-pointer`}
                >
                  <div className="duration-500">{item.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-3 w-52">
        <div className="text-sm text-accent-white mb-3 duration-500">settings</div>
        <div className="flex flex-col px-3">
          {SidebarData2.map((item, index) => {
            return (
              <Link
                className="group flex items-center text-body-color text-base cursor-pointer"
                to={item.path}
                key={index}
              >
                <div
                  className={` ${
                    splitLocation[1] === item.path
                      ? 'group-hover:text-white text-white flex py-2'
                      : 'group-hover:text-white text-main-white flex py-2'
                  } flex items-center group-hover:scale-110 duration-300 text-body-color cursor-pointer`}
                >
                  <div className="duration-500">{item.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-3 w-40">
        <div className="text-sm text-accent-white mb-3 duration-500">other</div>
        <div className="flex flex-col px-3">
          <a
            href="http://dopechat.ddns.net/"
            className="group flex items-center text-body-color text-base cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={` 
                  group-hover:text-white group-hover:scale-110 text-main-white py-2
flex items-center duration-300 text-body-color cursor-pointer`}
            >
              <div>Official site</div>
            </div>
          </a>
          <a
            href="http://dopechat.ddns.net/#section3"
            className="group flex items-center text-body-color text-base cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={` 
                  group-hover:text-white group-hover:scale-110 text-main-white py-2
flex items-center duration-300 text-body-color cursor-pointer`}
            >
              <div>Changelog</div>
            </div>
          </a>
          {SidebarData3.map((item, index) => {
            return (
              <Link
                to={item.path}
                className="group flex items-center text-body-color text-base cursor-pointer"
                key={index}
              >
                <div
                  className={` ${
                    splitLocation[1] === item.path
                      ? 'group-hover:text-white text-white flex py-2'
                      : 'group-hover:text-white group-hover:scale-110 text-main-white flex py-2'
                  } flex items-center duration-300 text-body-color cursor-pointer`}
                >
                  <div>{item.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

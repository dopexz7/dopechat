import { useLocation } from 'react-router-dom';

export default function HeaderNav() {
  const location = useLocation();
  return (
    <div className="bg-darker-purple backdrop-blur-sm z-50 absolute bottom-0 w-full flex items-center flex-shrink-0 p-5">
      <div className="text-main-white capitalize">{location.pathname.replace('/', '').replace('-', ' ')}</div>
      <div className=" text-white font-bold logo-bg rounded-3xl px-3 ml-auto text-base opacity-1 logo-bg2 duration-100">
        @ dope, 2022
      </div>
    </div>
  );
}

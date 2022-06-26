import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as ri from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Main page',
    path: 'main',
    icon: (
      <AiIcons.AiFillHome
        size={30}
        className="group-hover:bg-main-purple w-8 p-2 rounded-full bg-accent-purple flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
];

export const SidebarData2 = [
  {
    title: 'Chat settings',
    path: 'chat-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
  {
    title: 'Text settings',
    path: 'text-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
  {
    title: 'Usernames settings',
    path: 'usernames-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
  {
    title: 'Readability settings',
    path: 'readability-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
  {
    title: 'Highlighting settings',
    path: 'highlighting-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
  {
    title: 'Other settings',
    path: 'other-settings',
    icon: (
      <IoIcons.IoIosAlbums
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
];

export const SidebarData3 = [
  {
    title: 'About',
    path: 'about',
    icon: (
      <ri.RiCommunityFill
        size={30}
        className="group-hover:bg-main-blue w-8 p-2 rounded-full bg-button-bg flex-shrink-0 mr-4 duration-500"
      />
    ),
  },
];

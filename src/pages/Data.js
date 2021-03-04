import BennyImage from './../assets/images/show-card-img-1.jpg';
import VijayImage from './../assets/images/show-card-img-2.jpg';
import AndreaImage from './../assets/images/show-card-img-3.jpg';
import ShilpaImage from './../assets/images/show-card-img-4.jpg';

import HellenImage from './../assets/images/review-img-1.jpg';
import IssacImage from './../assets/images/review-img-2.jpg';
import SamImage from './../assets/images/review-img-3.jpg';

import BagIcon from './../assets/icons/bag-icon.svg';
import SearchIcon from './../assets/icons/search-icon.svg';
import HamburgerIcon from './../assets/icons/hamburger-icon.svg';
import StarredIcon from './../assets/icons/starred-icon.svg';
import HeartIcon from './../assets/icons/heart-icon.svg';
import TicketIcon from './../assets/icons/ticket-icon.svg';
import TicketClickedIcon from './../assets/icons/ticket-clicked-icon.svg';
import ArrowLeftIcon from './../assets/icons/arrow-left-icon.svg';
import ArrowRightIcon from './../assets/icons/arrow-right-icon.svg';
import CameraIcon from './../assets/icons/video-camera-icon.svg';
import GroupIcon from './../assets/icons/group-icon.svg';

import UsFlag from './../assets/icons/us-flag.svg';
import ItFlag from './../assets/icons/it-flag.svg';

export const icons = {
  BagIcon,
  SearchIcon,
  HamburgerIcon,
  StarredIcon,
  HeartIcon,
  TicketIcon,
  TicketClickedIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  GroupIcon,
};

export const flagCodes = {
  us: UsFlag,
  it: ItFlag,
};

export const iconLinks = [
  {
    id: 1,
    url: '/404',
    icon: icons.SearchIcon,
    name: 'Search',
    type: 'icon-link',
  },
  {
    id: 2,
    url: '/404',
    icon: icons.BagIcon,
    name: 'Bag',
    type: 'icon-link',
  },
  {
    id: 3,
    url: '/404',
    icon: icons.HamburgerIcon,
    name: 'Toggle',
    type: 'icon-link',
    isToggle: true,
    hasToggleHandler: true,
  },
];

export const sidebarLinks = [
  {
    id: 12,
    url: '/404',
    name: 'Help',
    hasToggleHandler: true,
  },
  { id: 23, url: '/404', name: 'Account', hasToggleHandler: true },
];

export const navbarLinks = [
  {
    id: 102,
    url: '/404',
    icon: icons.SearchIcon,
    name: 'Search',
    type: 'icon-text-link',
  },
  { id: 202, url: '/404', name: 'Help' },
  { id: 402, url: '/404', name: 'Account' },
  {
    id: 302,
    url: '/404',
    icon: icons.BagIcon,
    name: 'Bag',
    type: 'icon-link',
  },
];

export const labelInfo = [
  {
    id: 103,
    title: 'Likes Everyday',
    count: 456,
    icon: HeartIcon,
    type: 'likes',
  },
  { id: 203, title: 'Online Events', count: 745, icon: StarredIcon },
  {
    id: 303,
    title: 'Users',
    count: 10,
    icon: GroupIcon,
    type: 'users',
    isPositive: true,
  },
  {
    id: 403,
    title: 'Views every day',
    count: 2,
    icon: CameraIcon,
    isPositive: true,
  },
];

export const performers = [
  { id: 104, name: 'Benny Dayal', tag: 'Folk', imgUrl: BennyImage },
  { id: 204, name: 'Vijay Yesudas', tag: 'Bollywood', imgUrl: VijayImage },
  { id: 304, name: 'Andrea Jeremiah', tag: 'Folk', imgUrl: AndreaImage },
  { id: 404, name: 'Shilpa Rao', tag: 'Folk', imgUrl: ShilpaImage },
  { id: 504, name: 'Benny Dayal', tag: 'Folk', imgUrl: BennyImage },
  { id: 604, name: 'Vijay Yesudas', tag: 'Bollywood', imgUrl: VijayImage },
  { id: 704, name: 'Andrea Jeremiah', tag: 'Folk', imgUrl: AndreaImage },
  { id: 804, name: 'Shilpa Rao', tag: 'Folk', imgUrl: ShilpaImage },
];

export const reviews = [
  {
    id: 105,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: HellenImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 205,
    name: 'Isaac Oluwatemilorun',
    city: 'Palo Alto, CA',
    imgUrl: IssacImage,
    flag: flagCodes.it,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 305,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: SamImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 405,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: HellenImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 505,
    name: 'Isaac Oluwatemilorun',
    city: 'Palo Alto, CA',
    imgUrl: IssacImage,
    flag: flagCodes.it,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 608,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: SamImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 605,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: HellenImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 705,
    name: 'Isaac Oluwatemilorun',
    city: 'Palo Alto, CA',
    imgUrl: IssacImage,
    flag: flagCodes.it,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    id: 805,
    name: 'Hellen Jummy',
    city: 'Palo Alto, CA',
    imgUrl: SamImage,
    flag: flagCodes.us,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
];

/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const dashboards = {
  default: lazy(() => import('views/dashboards/DashboardsDefault')),
};
const apps = {
  index: lazy(() => import('views/apps/Apps')),
  calendar: lazy(() => import('views/apps/calendar/Calendar')),
  chat: lazy(() => import('views/apps/chat/Chat')),
  contacts: lazy(() => import('views/apps/contacts/Contacts')),
 
  tinchuaduyet: lazy(()=> import ('views/apps/Tin/Unconfirm')),
  tindaduyet: lazy(()=> import ('views/apps/Tin/expired')),
  tindangdienra: lazy(()=> import ('views/apps/Tin/Happening')),
};
const pages = {
  index: lazy(() => import('views/pages/Pages')),
  contacts: lazy(() => import('views/apps/contacts/Contacts')),
  
  
};
// const blocks = {
//   index: lazy(() => import('views/blocks/Blocks')),
//   cta: lazy(() => import('views/blocks/cta/Cta')),
//   details: lazy(() => import('views/blocks/details/Details')),
//   gallery: lazy(() => import('views/blocks/gallery/Gallery')),
//   images: lazy(() => import('views/blocks/images/Images')),
//   list: lazy(() => import('views/blocks/list/List')),
//   stats: lazy(() => import('views/blocks/stats/Stats')),
//   steps: lazy(() => import('views/blocks/steps/Steps')),
//   tabularData: lazy(() => import('views/blocks/tabulardata/TabularData')),
//   thumbnails: lazy(() => import('views/blocks/thumbnails/Thumbnails')),
// };


const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      // to: `${appRoot}/login`
      to: `${appRoot}/default`,
    },
    {
      component: dashboards.index,
      label: 'menu.dashboards',
      icon: 'home',
      path: '/default', label: 'Tổng Quan', component: dashboards.default,
    },
    {
      path: `${appRoot}/apps`,
      label: 'Quản Lý Tin',
      icon: 'screen',
      // component: apps.index,
      subs: [
        { path: '/calendar', label: 'menu.calendar', component: apps.calendar },
        { path: '/unconfirm', label: 'Tin chưa duyệt', component: apps.tinchuaduyet },
        { path: '/expired', label: 'Tin đã hết hạn', component: apps.tindaduyet },
        { path: '/happenning', label: 'Tin đang diễn ra', component: apps.tindangdienra },

      ],
    },
    {
      path: `${appRoot}/pages`,
      // label: 'Quản Lý Người Dùng',
      icon: 'notebook-1',
      // component: pages.index,
       path: '/user', label: 'Quản Lý Người Dùng', component: apps.contacts ,
     
    },
 
  ],
  sidebarItems: [
    { path: '#connections', label: 'menu.connections', icon: 'diagram-1', hideInRoute: true },
    { path: '#bookmarks', label: 'menu.bookmarks', icon: 'bookmark', hideInRoute: true },
    { path: '#requests', label: 'menu.requests', icon: 'diagram-2', hideInRoute: true },
    {
      path: '#account',
      label: 'menu.account',
      icon: 'user',
      hideInRoute: true,
      subs: [
        { path: '/settings', label: 'menu.settings', icon: 'gear', hideInRoute: true },
        { path: '/password', label: 'menu.password', icon: 'lock-off', hideInRoute: true },
        { path: '/devices', label: 'menu.devices', icon: 'mobile', hideInRoute: true },
      ],
    },
    {
      path: '#notifications',
      label: 'menu.notifications',
      icon: 'notification',
      hideInRoute: true,
      subs: [
        { path: '/email', label: 'menu.email', icon: 'email', hideInRoute: true },
        { path: '/sms', label: 'menu.sms', icon: 'message', hideInRoute: true },
      ],
    },
    {
      path: '#downloads',
      label: 'menu.downloads',
      icon: 'download',
      hideInRoute: true,
      subs: [
        { path: '/documents', label: 'menu.documents', icon: 'file-text', hideInRoute: true },
        { path: '/images', label: 'menu.images', icon: 'file-image', hideInRoute: true },
        { path: '/videos', label: 'menu.videos', icon: 'file-video', hideInRoute: true },
      ],
    },
  ],
};
export default routesAndMenuItems;

import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Dashboard',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'contacts',
        path: '/contacts',
        title: 'Contacts',
        translateKey: 'nav.contacts',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'leads',
        path: '/leads',
        title: 'Leads',
        translateKey: 'nav.leads',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'claims',
        path: '/',
        title: 'Claims',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'home',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'claims.item1',
                path: '/claims-item-view-1',
                title: 'Claims item 1',
                translateKey: 'nav.claims.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item2',
                path: '/claims-item-view-2',
                title: 'Claims item 2',
                translateKey: 'nav.claims.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },

        ],
    },



    {
        key: 'photos',
        path: '/photos',
        title: 'Photos',
        translateKey: 'nav.photos',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'equipment',
        path: '/equipment',
        title: 'Equipment',
        translateKey: 'nav.equipment',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'reports',
        path: '/reports',
        title: 'Reports',
        translateKey: 'nav.reports',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'calendar',
        path: '/calendar',
        title: 'Calendar',
        translateKey: 'nav.calendar',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'tasks',
        path: '/tasks',
        title: 'Tasks',
        translateKey: 'nav.tasks',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'activityLog',
        path: '/activityLog',
        title: 'Activity Log',
        translateKey: 'nav.activityLog',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default navigationConfig

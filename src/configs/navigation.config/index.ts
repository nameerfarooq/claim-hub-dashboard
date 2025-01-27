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
        icon: 'navIcon',
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
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'leads',
        path: '/leads',
        title: 'Leads',
        translateKey: 'nav.leads',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'claims',
        path: '/',
        title: 'Claims',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'claims.item7',
                path: '/claims',
                title: 'Claims List',
                translateKey: 'nav.claims.item7',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item8',
                path: '/claims-pipeline',
                title: 'Pipeline',
                translateKey: 'nav.claims.item8',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item1',
                path: '/sales',
                title: 'Sales',
                translateKey: 'nav.claims.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item2',
                path: '/processing',
                title: 'Processing',
                translateKey: 'nav.claims.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item3',
                path: '/job',
                title: 'Job',
                translateKey: 'nav.claims.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item4',
                path: '/accounting',
                title: 'Accounting',
                translateKey: 'nav.claims.item4',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item5',
                path: '/negotiations',
                title: 'Negotiations',
                translateKey: 'nav.claims.item5',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'claims.item6',
                path: '/close-out',
                title: 'Close Out',
                translateKey: 'nav.claims.item6',
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
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'equipment',
        path: '/equipment',
        title: 'Equipment',
        translateKey: 'nav.equipment',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'reports',
        path: '/reports',
        title: 'Reports',
        translateKey: 'nav.reports',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'calendar',
        path: '/calendar',
        title: 'Calendar',
        translateKey: 'nav.calendar',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'tasks',
        path: '/tasks',
        title: 'Tasks',
        translateKey: 'nav.tasks',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'activityLog',
        path: '/activityLog',
        title: 'Activity Log',
        translateKey: 'nav.activityLog',
        icon: 'navIcon',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default navigationConfig

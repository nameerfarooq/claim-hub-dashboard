import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'Contacts',
        path: '/contacts',
        component: lazy(() => import('@/views/Contact')),
        authority: [],
    },
    {
        key: 'Leads',
        path: '/leads',
        component: lazy(() => import('@/views/Leads')),
        authority: [],
    },
    {
        key: 'nav.claims.item1',
        path: '/sales',
        component: lazy(() => import('@/views/Claim/Sales')),
        authority: [],
    },
    {
        key: 'nav.claims.item2',
        path: '/processing',
        component: lazy(() => import('@/views/Claim/Processing')),
        authority: [],
    },
    {
        key: 'nav.claims.item3',
        path: '/job',
        component: lazy(() => import('@/views/Claim/Job')),
        authority: [],
    },
    {
        key: 'nav.claims.item4',
        path: '/accounting',
        component: lazy(() => import('@/views/Claim/Accounting')),
        authority: [],
    },
    {
        key: 'nav.claims.item5',
        path: '/negotiations',
        component: lazy(() => import('@/views/Claim/Negotiations')),
        authority: [],
    },
    {
        key: 'nav.claims.item6',
        path: '/close-out',
        component: lazy(() => import('@/views/Claim/CloseOut')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView1'),
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView2'),
        ),
        authority: [],
    },
    ...othersRoute,
]

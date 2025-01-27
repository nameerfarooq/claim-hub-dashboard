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
        key: 'nav.claims.item8',
        path: '/claims-pipeline',
        component: lazy(() => import('@/views/Claim/ClaimBoard')),
        authority: [],
    },
    {
        key: 'nav.claims.item7',
        path: '/claims',
        component: lazy(() => import('@/views/Claim/ClaimList')),
        authority: [],
    },
    {
        key: 'overview',
        path: '/overview',
        component: lazy(() => import('@/views/Overview/Main')),
        authority: [],
    },
    {
        key: 'create-estimate',
        path: '/overview/create-estimate',
        component: lazy(
            () => import('@/views/Overview/EstimateViews/CreateEstimate'),
        ),
        authority: [],
    },
    {
        key: 'create-order',
        path: '/overview/create-order',
        component: lazy(
            () => import('@/views/Overview/OrderViews/CreateOrder'),
        ),
        authority: [],
    },
    {
        key: 'create-job-order',
        path: '/overview/create-job-order',
        component: lazy(
            () => import('@/views/Overview/OrderViews/CreateJobOrder'),
        ),
        authority: [],
    },
    {
        key: 'pricing',
        path: '/pricing',
        component: lazy(() => import('@/views/Pricing')),
        authority: [],
    },
    {
        key: 'profile',
        path: '/profile',
        component: lazy(() => import('@/views/Profile/Profile')),
        authority: [],
    },
    {
        key: 'equipment',
        path: '/equipment',
        component: lazy(() => import('@/views/Equipment')),
        authority: [],
    },
    ...othersRoute,
]

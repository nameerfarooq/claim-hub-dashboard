import { Card } from '@/components/ui'
import TabContent from '@/components/ui/Tabs/TabContent'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import Tabs from '@/components/ui/Tabs/Tabs'
import React, { useState } from 'react'
import Overview from './Overview'
import Tasks from './Tasks'
import Communication from './Communication'
import Scheduler from './Scheduler'
import Photos from './Photos'
import Estimate from './EstimateViews/Estimate'
import Documents from './Documents'
import Orders from './OrderViews/Orders'
import {
    TbCalendar,
    TbFile,
    TbFileDescription,
    TbHome,
    TbMail,
} from 'react-icons/tb'
import { GoImage } from 'react-icons/go'

const Main = () => {
    const [currentTab, setCurrentTab] = useState('overview')
    const scheduleData = [
        {
            barVariant: 'development',
            displayOrder: 8,
            end: 'Mon Jan 20 2025',
            id: '7d59bda8-c78e-4b7d-b66d-a5862f4c2644',
            name: 'Integrate modules',
            progress: 10,
            project: '96c97159-aaff-45d0-b874-74e4aa059b0f',
            start: 'Sun Jan 12 2025',
            styles: {
                backgroundColor: 'rgba(125, 211, 252, 0.5)',
                backgroundSelectedColor: 'rgba(125, 211, 252, 0.5)',
                progressColor: 'rgb(125, 211, 252)',
                progressSelectedColor: 'rgb(125, 211, 252)',
            },
            type: 'task',
        },
    ]

    return (
        <Card>
            <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
                <TabList className="border-b border-primary">
                    <TabNav
                        icon={<TbHome />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'overview' ? 'bg-primary-mild text-white' : ''}`}
                        value="overview"
                    >
                        Overview
                    </TabNav>
                    <TabNav
                        icon={<TbMail />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'tasks' ? 'bg-primary-mild text-white' : ''}`}
                        value="tasks"
                    >
                        Tasks
                    </TabNav>
                    <TabNav
                        icon={<TbMail />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'communication' ? 'bg-primary-mild text-white' : ''}`}
                        value="communication"
                    >
                        Communication
                    </TabNav>
                    <TabNav
                        icon={<TbCalendar />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'scheduler' ? 'bg-primary-mild text-white' : ''}`}
                        value="scheduler"
                    >
                        Scheduler
                    </TabNav>
                    <TabNav
                        icon={<GoImage />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'photos' ? 'bg-primary-mild text-white' : ''}`}
                        value="photos"
                    >
                        Photos
                    </TabNav>
                    <TabNav
                        icon={<TbFile />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'estimate' ? 'bg-primary-mild text-white' : ''}`}
                        value="estimate"
                    >
                        Estimate
                    </TabNav>
                    <TabNav
                        icon={<TbFileDescription />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'documents' ? 'bg-primary-mild text-white' : ''}`}
                        value="documents"
                    >
                        Documents
                    </TabNav>
                    <TabNav
                        icon={<TbFileDescription />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'orders' ? 'bg-primary-mild text-white' : ''}`}
                        value="orders"
                    >
                        Order
                    </TabNav>
                </TabList>
                <div className="p-4">
                    <TabContent value="overview">
                        <Overview />
                    </TabContent>
                    <TabContent value="tasks">
                        <Tasks />
                    </TabContent>
                    <TabContent value="communication">
                        <Communication />
                    </TabContent>
                    <TabContent value="scheduler">
                        {/* <Scheduler data={scheduleData} /> */}
                        Scheduler Goes Here
                    </TabContent>
                    <TabContent value="photos">
                        <Photos />
                    </TabContent>
                    <TabContent value="estimate">
                        <Estimate />
                    </TabContent>
                    <TabContent value="documents">
                        <Documents />
                    </TabContent>
                    <TabContent value="orders">
                        <Orders />
                    </TabContent>
                </div>
            </Tabs>
        </Card>
    )
}

export default Main

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
import Estimate from './Estimate'
import Documents from './Documents'
import Orders from './Orders'

const Main = () => {
    const [currentTab, setCurrentTab] = useState('overview')
    return (
        <div className="w-fit mx-auto">
            <Card>
                <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
                    <TabList className="border-b border-primary">
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'overview' ? 'bg-primary-mild text-white' : ''}`}
                            value="overview"
                        >
                            Overview
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'tasks' ? 'bg-primary-mild text-white' : ''}`}
                            value="tasks"
                        >
                            Tasks
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'communication' ? 'bg-primary-mild text-white' : ''}`}
                            value="communication"
                        >
                            Communication
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'scheduler' ? 'bg-primary-mild text-white' : ''}`}
                            value="scheduler"
                        >
                            Scheduler
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'photos' ? 'bg-primary-mild text-white' : ''}`}
                            value="photos"
                        >
                            Photos
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'estimate' ? 'bg-primary-mild text-white' : ''}`}
                            value="estimate"
                        >
                            Estimate
                        </TabNav>
                        <TabNav
                            className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'documents' ? 'bg-primary-mild text-white' : ''}`}
                            value="documents"
                        >
                            Documents
                        </TabNav>
                        <TabNav
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
                            <Scheduler />
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
        </div>
    )
}

export default Main

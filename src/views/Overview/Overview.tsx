import {
    Avatar,
    Button,
    Card,
    Select,
    Tag,
    Calendar,
    Timeline,
    Steps,
    Tabs,
} from '@/components/ui'
import React, { useState } from 'react'
import { IoMdAdd, IoMdMenu } from 'react-icons/io'
import { GoTag } from 'react-icons/go'
import { FaCheck, FaRegCircle, FaRegClock } from 'react-icons/fa'
import user from '@/assets/Images/user.png'
import { IoPersonOutline } from 'react-icons/io5'
import { LuMessageSquareText, LuPhone, LuSquareCheckBig } from 'react-icons/lu'
import EditPencilIcon from '@/assets/icons/EditPencil'
import { CiMail } from 'react-icons/ci'
import { HiOutlineUser } from 'react-icons/hi'
import { BsCameraVideoFill } from 'react-icons/bs'
import { TbCalendarStar, TbCoffee } from 'react-icons/tb'
import { STEPS_STATUS } from '@/components/ui/utils/constants'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import TabContent from '@/components/ui/Tabs/TabContent'

const Overview = () => {
    const tasks = [
        {
            id: 1,
            title: 'Review contract for missing signatures',
            priority: 'High',
            date: 'August 04',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 2,
            title: 'Upload additional site photos',
            priority: 'Medium',
            date: 'July 14',
            icon: <FaCheck />,
            completed: true,
        },
        {
            id: 3,
            title: 'Follow up with insurance adjuster',
            priority: 'High',
            date: 'September 19',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 4,
            title: 'Submit technician drylogs for approval',
            priority: 'High',
            date: 'September 04',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 5,
            title: 'Verify uploaded invoices for accuracy',
            priority: 'Medium',
            date: 'July 24',
            icon: <FaCheck />,
            completed: true,
        },
    ]

    const events = [
        {
            id: 1,
            title: 'Initial Inspection',
            type: 'Meeting',
            time: '10:00 AM',
            icon: <BsCameraVideoFill />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 2,
            title: 'Insurance Adjuster Call',
            type: 'Followup',
            time: '12:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 3,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCoffee />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 4,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 5,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 6,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-gray-200',
        },
    ]

    const activities = [
        {
            id: 1,
            date: 'SUNDAY, 06 MARCH',
            activity: [
                {
                    id: 1,
                    title: 'Photos uploaded by Technician Mike',
                    details: 'Recipient: Steve Sutton',
                    time: '03:13 AM',
                },
                {
                    id: 2,
                    title: 'Contract signed by the client',
                    time: '10:32 PM',
                },
                {
                    id: 3,
                    title: 'Claim approved by insurance adjuster',
                    time: '08:15 PM',
                },
            ],
        },
        {
            id: 2,
            date: 'FRIDAY, 04 MARCH',
            activity: [
                {
                    id: 1,
                    title: 'Payment invoice generated',
                    time: '01:43 AM',
                },
                {
                    id: 2,
                    title: 'Drying equipment deployed at site',
                    time: '10:32 PM',
                },
            ],
        },
    ]

    const stepsData = [
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Lead',
            description: '3 Days',
            icon: <BsCameraVideoFill />, // Use COMPLETE instead of 'complete'
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Scheduling',
            description: '26 Days',
            icon: <BsCameraVideoFill />,
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Assessment',
            description: '8 Months',
            icon: <BsCameraVideoFill />, // Use IN_PROGRESS instead of 'in_progress'
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Determination',
            description: '9-20-2023',
            icon: <BsCameraVideoFill />, // Use PENDING instead of 'pending'
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Litigation',
            description: '9-23-2023',
            icon: <BsCameraVideoFill />,
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <FaCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Settlement',
            description: '10-19-2023',
            icon: <BsCameraVideoFill />,
        },
    ]

    const [currentTab, setCurrentTab] = useState('comments')

    return (
        <main className="flex flex-col gap-[40px]">
            <section className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-[10px]">
                    <Tag className="bg-red-300 w-fit">Dryout and Tarp</Tag>
                    <p className="text-2xl font-bold">Samuel Andrew Hall</p>
                </div>
                <button className="text-lg font-bold px-2 py-3 bg-primary-subtle text-black rounded-lg flex flex-row items-center gap-1">
                    <span>
                        <IoMdMenu />
                    </span>{' '}
                    Claim Menu
                </button>
            </section>
            <section className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <GoTag />
                        </span>{' '}
                        Label
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Tag className="bg-red-300 w-fit">Water</Tag>
                        <Tag className="bg-primary-subtle w-fit">Hurricane</Tag>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <FaRegCircle />
                        </span>{' '}
                        Stage
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Tag className="bg-success-subtle w-fit">
                            Scheduling
                        </Tag>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <IoPersonOutline />
                        </span>{' '}
                        Assigned to
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Avatar src={user} size={'sm'} />
                        <Avatar src={user} size={'sm'} />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <FaRegClock />
                        </span>{' '}
                        Due date
                    </p>
                    <div className="gap-1 flex flex-row">
                        <p className="w-fit font-semibold">March 24</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[10px]">
                <p className="text-xl font-bold">Milestones</p>
                <div className="w-full py-[10px]">
                    <Steps current={2}>
                        {stepsData.map((step, index) => (
                            <Steps.Item
                                key={index}
                                title={step.title}
                                customIcon={step.icon}
                            />
                        ))}
                    </Steps>
                </div>
                <div className="w-full mx-auto flex flex-row items-center justify-center mt-2">
                    <button className="py-2 px-3 rounded-lg text-lg font-bold bg-primary-mild text-white">
                        Submit
                    </button>
                </div>
            </section>
            <section className="flex flex-col gap-[10px]">
                <p className="text-xl font-bold">Overview</p>
                <div className="flex flex-row gap-4">
                    <Card className="bg-white border border-dashed border-primary-mild w-3/12">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-success-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Messages</p>
                                <p className="text-4xl font-bold">387</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild w-3/12">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-grape"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Documents</p>
                                <p className="text-4xl font-bold">3</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild w-3/12">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-primary-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Photos</p>
                                <p className="text-4xl font-bold">564</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild w-3/12">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-success-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Invoice</p>
                                <p className="text-4xl font-bold">2</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild w-3/12">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-grape"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">On-Site visit</p>
                                <p className="text-4xl font-bold">7</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="flex flex-row gap-4">
                <Card className="bg-white border border-primary-mild w-3/12">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Client</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <EditPencilIcon />
                        </button>
                    </div>
                    <div className="flex flex-row items-center gap-[10px] py-[20px]">
                        <Avatar src={user} size={'sm'} />
                        <div className="flex flex-col">
                            <p className="font-bold">Samuel Andrew Hall</p>
                            <p className="flex flex-row items-center">
                                {' '}
                                First contact :{' '}
                                <span className="font-semibold">
                                    4th May
                                </span>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="border-y border-gray-200 py-[20px] flex flex-col gap-[15px]">
                        <p className="flex flex-row items-center gap-[10px]">
                            <span>
                                <CiMail />
                            </span>{' '}
                            handsome-obrien@hotmail.com
                        </p>
                        <p className="flex flex-row items-center gap-[10px]">
                            <span>
                                <LuPhone />
                            </span>{' '}
                            +1 (541) 754-3010
                        </p>
                    </div>
                    <div className="py-[20px] flex flex-col gap-[15px]">
                        <p className="font-bold text-[16px]">Job Address</p>
                        <div className="gap-[5px] flex flex-col">
                            <p>1527 Pond Reef Rd</p>
                            <p>Ketchikan</p>
                            <p>Alaska 99901</p>
                            <p>United States of America</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-white border border-primary-mild w-3/12 relative">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Claim</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <EditPencilIcon />
                        </button>
                    </div>
                    <div className="py-[20px] border-b border-gray-200">
                        <Select
                            options={[
                                { value: 'Option 1', label: 'Option 1' },
                                { value: 'Option 2', label: 'Option 2' },
                            ]}
                            isSearchable={false}
                            isMulti
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Category</p>
                            <p className="font-semibold">Residential</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Work Type</p>
                            <p className="font-semibold">Inspection</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Trade</p>
                            <p className="font-semibold">Asphalt Roofing</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Initial Appt</p>
                            <p className="font-semibold">
                                11 Aug 2024 09:40 PM
                            </p>
                        </div>
                    </div>
                    <p className="absolute bottom-[20px] right-5 text-primary-mild cursor-pointer border-b border-primary-mild">
                        See All (8 Total)
                    </p>
                </Card>
                <Card className="bg-white border border-primary-mild w-3/12">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Insurance</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <EditPencilIcon />
                        </button>
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Insurance Company</p>
                            <p className="font-semibold">State Farm</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Damage Location</p>
                            <p className="font-semibold">
                                123 Maple Street, Miami, FL
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Date of Loss</p>
                            <p className="font-semibold">November 15, 2024</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Field</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Number</p>
                            <p className="font-semibold">784526431</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Have Paperwork</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-white border border-primary-mild w-3/12">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Adjuster</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <EditPencilIcon />
                        </button>
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Adjuster Name</p>
                            <p className="font-semibold">Cindy Hernandez</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Phone</p>
                            <p className="font-semibold">(407) 871- 4426</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Fax</p>
                            <p className="font-semibold">-</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Field</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Email</p>
                            <p className="font-semibold">
                                CINDY.HERNANDEZ@LIB.COM
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Met With Adjuster</p>
                            <p className="font-semibold">No</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Approved</p>
                            <p className="font-semibold">No</p>
                        </div>
                    </div>
                </Card>
            </section>
            <section className="flex flex-row gap-2">
                <Card className="bg-white border border-primary-mild w-4/12">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xl font-bold">Current tasks</p>
                        <div className="flex flex-row gap-1">
                            <button className="px-3 p-2 bg-primary-mild text-white flex flex-row items-center rounded-xl  font-bold">
                                <IoMdAdd />
                                Add
                            </button>
                            <Button variant="default"> All tasks</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] h-[350px] overflow-auto custom-scrollbar pr-2 pt-[20px]">
                        {tasks.map((task) => (
                            <div key={task.id} className="pb-2 border-b">
                                <Card
                                    bordered={true}
                                    className="border-white"
                                    bodyClass="p-0"
                                >
                                    <div className="flex flex-row justify-between items-center gap-[10px]">
                                        <div className="w-fit">
                                            <Button
                                                className={`rounded-full size-[24px] p-1 ${task.completed ? 'bg-[#42FFC0] text-white border-white ' : 'bg-white text-black border-black '}`}
                                                icon={task.icon}
                                            ></Button>
                                        </div>
                                        <div className="w-full h-full flex flex-row justify-between items-center">
                                            <div className="flex flex-col">
                                                <p
                                                    className={`font-bold text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}
                                                >
                                                    {task.title}
                                                </p>
                                                <p className="text-sm flex flex-row items-center">
                                                    <span className="mr-[2px]">
                                                        <HiOutlineUser
                                                            size={12}
                                                        />{' '}
                                                    </span>
                                                    {task.date}
                                                </p>
                                            </div>
                                            <Tag
                                                className={`${task.priority === 'Low' ? 'bg-success-light' : task.priority === 'Medium' ? 'bg-[#42FFC0]' : 'bg-red-300'}`}
                                            >
                                                {task.priority}
                                            </Tag>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Card>
                <div className="bg-white border border-primary-mild w-4/12 rounded-2xl py-4">
                    <div className="h-[350px] overflow-y-auto custom-scrollbar">
                        <div className="w-fit mx-auto">
                            <Calendar />
                        </div>
                        <div className="mt-5 flex flex-col gap-[20px] px-4">
                            <p className="text-lg font-bold">Schedule Today</p>
                            <div>
                                {events.map((event) => (
                                    <div key={event.id} className="mb-4">
                                        <Card
                                            bordered={true}
                                            className="border-white"
                                            bodyClass="p-0"
                                        >
                                            <div className="flex flex-row justify-between items-center">
                                                <div className="w-2/12">
                                                    <Avatar
                                                        className={`${event.iconColor} rounded-lg`}
                                                        icon={event.icon}
                                                        shape="square"
                                                    />
                                                </div>
                                                <div className="w-10/12 h-full flex flex-row justify-between items-center">
                                                    <div className="flex flex-col">
                                                        <p className="font-bold text-sm">
                                                            {event.title}
                                                        </p>
                                                        <p className="text-sm">
                                                            {event.type}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm font-semibold ml-auto">
                                                        {event.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <Button className="w-full" variant="default">
                            Add Event
                        </Button>
                    </div>
                </div>
                <Card className="bg-white border border-primary-mild w-4/12">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xl font-bold">Activities</p>
                        <Button>All Activities</Button>
                    </div>
                    <div className="pt-[20px] h-[350px] overflow-auto custom-scrollbar">
                        <Timeline>
                            {activities.map((group) => (
                                <React.Fragment key={group.id}>
                                    <p className="font-bold">{group.date}</p>

                                    {group.activity.map((activity) => (
                                        <Timeline.Item key={activity.id}>
                                            <div>
                                                <p className="font-bold">
                                                    {activity.title}
                                                </p>
                                                {activity.details && (
                                                    <p>{activity.details}</p>
                                                )}
                                                <p>{activity.time}</p>
                                            </div>
                                        </Timeline.Item>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Timeline>
                    </div>
                </Card>
            </section>
            <section className="flex flex-col">
                <div className="flex flex-col gap-4 w-full">
                    <Tabs
                        value={currentTab}
                        onChange={(val) => setCurrentTab(val)}
                    >
                        <TabList>
                            <TabNav
                                className={`text-black ${currentTab === 'comments' ? 'border-b-2 border-black' : ''}`}
                                value="comments"
                            >
                                Comments
                            </TabNav>
                            <TabNav
                                className={`text-black ${currentTab === 'attachments' ? 'border-b-2 border-black' : ''}`}
                                value="attachments"
                            >
                                Attachments
                            </TabNav>
                        </TabList>
                        <div className="p-4">
                            <TabContent value="comments"></TabContent>
                            <TabContent value="attachments"></TabContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </main>
    )
}

export default Overview

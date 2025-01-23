import { AdaptiveCard, Chart } from '@/components/shared'
import { Card, Button, Select, Calendar, Tabs, Avatar } from '@/components/ui'
import { HiOutlineUser } from 'react-icons/hi'

const Home = () => {
    const series = [
        {
            name: 'Sales',
            data: [240, 320, 280, 360, 340, 410, 370, 460, 390, 470, 360, 560],
        },
    ]

    const xAxis = [
        '01 Jun',
        '02 Jun',
        '03 Jun',
        '04 Jun',
        '05 Jun',
        '06 Jun',
        '07 Jun',
        '08 Jun',
        '09 Jun',
        '10 Jun',
        '11 Jun',
        '12 Jun',
    ]

    const events = [
        {
            id: 1,
            title: 'Daily standup',
            type: 'Meeting',
            time: '10:00 AM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-grape',
        },
        {
            id: 2,
            title: 'Lunch break',
            type: 'Break',
            time: '12:00 PM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-success-light',
        },
        {
            id: 3,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-primary-light',
        },
        {
            id: 4,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-success-light',
        },
        {
            id: 5,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-primary-light',
        },
        {
            id: 6,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <HiOutlineUser />,
            iconColor: 'bg-success-light',
        },
    ]

    const tasks = [
        {
            id: 1,
            title: 'Unable to upload file',
            priority: 'High',
            date: 'August 05',
            icon: <HiOutlineUser />,
            completed: false,
        },
        {
            id: 2,
            title: 'Error in database query',
            priority: 'Medium',
            date: 'July 15',
            icon: <HiOutlineUser />,
            completed: true,
        },
        {
            id: 3,
            title: 'Authentication problem',
            priority: 'High',
            date: 'September 20',
            icon: <HiOutlineUser />,
            completed: false,
        },
        {
            id: 4,
            title: 'Bug in search functionality',
            priority: 'High',
            date: 'September 05',
            icon: <HiOutlineUser />,
            completed: false,
        },
        {
            id: 5,
            title: 'Compatibility issue with Firefox',
            priority: 'Medium',
            date: 'July 25',
            icon: <HiOutlineUser />,
            completed: true,
        },
    ]

    return (
        <main className="flex flex-col gap-4">
            <section className="flex flex-row gap-4 h-full">
                <div className="w-9/12 flex flex-col gap-4">
                    <AdaptiveCard>
                        <div className="flex flex-row w-full justify-between items-center mb-[10px]">
                            <p className="text-xl font-bold">Overview</p>
                            <Button variant="default">All Claims</Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 w-full bg-gray-100 p-[8px] rounded-[20px]">
                            <Card bordered={false} className="!shadow-none">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-bold">
                                            Sales
                                        </p>
                                        <p className="text-4xl font-bold">12</p>
                                    </div>
                                    <Avatar
                                        className="bg-primary-light"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                            <Card bordered={false} className="!shadow-none">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-bold">
                                            Processing
                                        </p>
                                        <p className="text-4xl font-bold">68</p>
                                    </div>
                                    <Avatar
                                        className="bg-success-light"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                            <Card bordered={false} className="!shadow-none">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-bold">Job</p>
                                        <p className="text-4xl font-bold">7</p>
                                    </div>
                                    <Avatar
                                        className="bg-grape"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                        </div>
                    </AdaptiveCard>

                    <AdaptiveCard>
                        <div className="flex flex-row w-full justify-between items-center mb-[10px]">
                            <p className="text-2xl font-bold">Overview</p>
                            <Select
                                options={[
                                    { label: 'Monthly', value: 'monthly' },
                                    { label: 'Yearly', value: 'yearly' },
                                ]}
                                defaultValue={{
                                    label: 'Monthly',
                                    value: 'monthly',
                                }}
                            >
                                All Claims
                            </Select>
                        </div>
                        <div className="grid grid-cols-3 gap-4 w-full bg-gray-100 p-[8px] rounded-[20px]">
                            <Card bordered={false} className="!shadow-none">
                                <div className="flex flex-row justify-between items-start">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-semibold">
                                            Total Revenue
                                        </p>
                                        <div>
                                            <h5 className="text-4xl font-bold">
                                                $82,373.21
                                            </h5>
                                            <p className="text-black text-sm font-semibold">
                                                <span className="text-success font-bold">
                                                    +3.4%{' '}
                                                </span>
                                                from last month
                                            </p>
                                        </div>
                                    </div>
                                    <Avatar
                                        className="bg-success-light"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                            <Card
                                bordered={false}
                                className="!shadow-none !bg-gray-100"
                            >
                                <div className="flex flex-row justify-between items-start">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-semibold">
                                            Total Profit
                                        </p>
                                        <div>
                                            <h5 className="text-4xl font-bold">
                                                7,234
                                            </h5>
                                            <p className="text-black text-sm font-semibold">
                                                <span className="text-error font-bold">
                                                    -2.8%{' '}
                                                </span>
                                                from last month
                                            </p>
                                        </div>
                                    </div>
                                    <Avatar
                                        className="bg-grape"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                            <Card
                                bordered={false}
                                className="!shadow-none !bg-gray-100"
                            >
                                <div className="flex flex-row justify-between items-start">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm font-semibold">
                                            Total Claims
                                        </p>
                                        <div>
                                            <h5 className="text-4xl font-bold">
                                                3.1M
                                            </h5>
                                            <p className="text-black text-sm font-semibold">
                                                <span className="text-success font-bold">
                                                    +4.6%{' '}
                                                </span>
                                                from last month
                                            </p>
                                        </div>
                                    </div>
                                    <Avatar
                                        className="bg-primary-light"
                                        icon={<HiOutlineUser />}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Chart
                                type="area"
                                series={series}
                                xAxis={xAxis}
                                height={350}
                            />
                        </div>
                    </AdaptiveCard>
                </div>
                <div className="w-3/12 h-full">
                    <AdaptiveCard>
                        <Calendar />
                        <div className="mt-5 flex flex-col gap-[20px]">
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
                            <Button variant="default">Add Event</Button>
                        </div>
                    </AdaptiveCard>
                </div>
            </section>

            <section className="flex flex-row gap-4 h-auto">
                <div className="w-4/12 h-full">
                    <AdaptiveCard>
                        <div className="flex flex-row w-full justify-between items-center pb-[20px]">
                            <p className="text-xl font-bold">Current tasks</p>
                            <Button variant="default">All tasks</Button>
                        </div>
                        <div className="flex flex-col">
                            {tasks.map((task) => (
                                <div key={task.id} className="mb-4">
                                    <Card
                                        bordered={true}
                                        className="border-white"
                                        bodyClass="p-0"
                                    >
                                        <div className="flex flex-row justify-between items-center gap-[10px]">
                                            <div className="w-fit">
                                                <Button
                                                    className={`rounded-full size-[24px] p-1 ${task.completed ? 'bg-black text-white' : 'bg-white text-black'}`}
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
                                                <p
                                                    className={`text-xs font-semibold ml-auto p-1 rounded ${task.priority === 'Low' ? 'bg-success-light' : task.priority === 'Medium' ? 'bg-[#bafdfa]' : 'bg-red-300'}`}
                                                >
                                                    {task.priority}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </AdaptiveCard>
                </div>
                <div className="w-4/12 h-full">
                    <AdaptiveCard></AdaptiveCard>
                </div>
                <div className="w-4/12 h-full">
                    <AdaptiveCard></AdaptiveCard>
                </div>
            </section>
        </main>
    )
}

export default Home

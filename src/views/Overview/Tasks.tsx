import React from 'react'
import user from '@/assets/Images/user.png'
import Avatar from '@/components/ui/Avatar'
import { Button } from '@/components/ui'
import { BsPlus } from 'react-icons/bs'
import { DataTable } from '@/components/shared'
import { useMemo } from 'react'
import { Tag } from '@/components/ui'
import { HiCheckCircle, HiClock } from 'react-icons/hi'

const Tasks = () => {
    const tasks = [
        {
            id: 1,
            task: 'Upload Initial Site Photos',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 19',
        },
        {
            id: 2,
            task: 'Submit Drying Equipment Logs',
            status: 'Complete',
            priority: 'Medium',
            dueDate: 'July 14',
        },
        {
            id: 3,
            task: 'Follow Up with Insurance Adjuster',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 19',
        },
        {
            id: 4,
            task: 'Verify Signed Contract with Client',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 04',
        },
        {
            id: 5,
            task: 'Prepare Invoice for Submitted Work',
            status: 'Complete',
            priority: 'Medium',
            dueDate: 'July 24',
        },
    ]

    const columns = useMemo(
        () => [
            {
                header: 'Task',
                accessorKey: 'task',
            },
            {
                header: 'Status',
                accessorKey: 'status',
                cell: (props) => {
                    const status = props.getValue()
                    return (
                        <div className="flex items-center gap-2">
                            {status === 'Complete' ? (
                                <HiCheckCircle className="text-green-500" />
                            ) : (
                                <HiClock className="text-yellow-500" />
                            )}
                            <span>{status}</span>
                        </div>
                    )
                },
            },
            {
                header: 'Priority',
                accessorKey: 'priority',
                cell: (props) => {
                    const priority = props.getValue()
                    return (
                        <Tag
                            className={
                                priority === 'High'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-yellow-100 text-yellow-600'
                            }
                        >
                            {priority}
                        </Tag>
                    )
                },
            },
            {
                header: 'Due Date',
                accessorKey: 'dueDate',
            },
        ],
        [],
    )

    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between pt-[30px]">
                <p className="text-2xl font-bold">Tasks</p>
                <div className="flex flex-row gap-2">
                    <Avatar.Group
                        chained
                        maxCount={4}
                        omittedAvatarProps={{ shape: 'circle' }}
                        omittedAvatarTooltip
                        onOmittedAvatarClick={() =>
                            console.log('Omitted Avatar Clicked')
                        }
                    >
                        <Avatar src={user} />
                        <Avatar src={user} />
                        <Avatar src={user} />
                        <Avatar src={user} />
                        <Avatar src={user} />
                        <Avatar src={user} />
                        <Avatar src={user} />
                    </Avatar.Group>
                    <Button variant="default" icon={<BsPlus size={22} />}>
                        Add members
                    </Button>
                </div>
            </div>
            <div>
                <DataTable
                    columns={columns}
                    data={tasks}
                    pagingData={{
                        total: tasks.length,
                        pageIndex: 1,
                        pageSize: 10,
                    }}
                />
            </div>
        </main>
    )
}

export default Tasks

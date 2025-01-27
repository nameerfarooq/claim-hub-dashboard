import { Card, Segment } from '@/components/ui'
import React, { useState } from 'react'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdPersonAddAlt,
} from 'react-icons/md'
import GanttChart from '@/components/shared/GanttChart'
import getStartEndDateForProject from '@/components/shared/GanttChart/getStartEndDateForProject'
import type { ExtendedTask } from '@/components/shared/GanttChart'

type ScheduleProps = {
    data: ExtendedTask[]
}

const colorsMap = {
    overallDesign: '#fbbf24',
    design: '#fdba74',
    overallDevelopment: '#6ee7b7',
    development: '#7dd3fc',
}

const Scheduler = ({ data = [] }: ScheduleProps) => {
    const [activeValue, setActiveValue] = useState('month')

    const segmentValues = ['month', 'week', 'day']

    const handleArrowClick = (direction: 'left' | 'right') => {
        const currentIndex = segmentValues.indexOf(activeValue)
        let newIndex

        if (direction === 'right') {
            newIndex = (currentIndex + 1) % segmentValues.length
        } else {
            newIndex =
                (currentIndex - 1 + segmentValues.length) % segmentValues.length
        }

        setActiveValue(segmentValues[newIndex])
    }

    const [tasks, setTasks] = useState<ExtendedTask[]>(data)

    const handleTaskChange = (task: ExtendedTask) => {
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t))
        if (task.project) {
            const [start, end] = getStartEndDateForProject(
                newTasks,
                task.project,
            )
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)]
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end }
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t,
                )
            }
        }
        setTasks(newTasks)
    }

    const handleProgressChange = async (task: ExtendedTask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    }

    const handleExpanderClick = (task: ExtendedTask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    }

    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between">
                <p className="text-2xl font-bold">Jobs Scheduler</p>
                <div className="flex flex-row items-center gap-[10px]">
                    <button className="px-3 p-2 bg-primary-mild text-white flex flex-row items-center rounded-xl gap-[10px] font-bold">
                        <MdPersonAddAlt size={20} />
                        Schedule Claim Job
                    </button>
                    <Segment
                        className="bg-white border"
                        value={activeValue}
                        onChange={(value) => setActiveValue(value as string)}
                    >
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="month"
                        >
                            Month
                        </Segment.Item>
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="week"
                        >
                            Week
                        </Segment.Item>
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="day"
                        >
                            Day
                        </Segment.Item>
                    </Segment>

                    <Segment>
                        <Segment.Item
                            value="left"
                            onClick={() => handleArrowClick('left')}
                        >
                            <MdOutlineKeyboardArrowLeft />
                        </Segment.Item>
                        <Segment.Item
                            value="right"
                            onClick={() => handleArrowClick('right')}
                        >
                            <MdOutlineKeyboardArrowRight />
                        </Segment.Item>
                    </Segment>
                </div>
            </div>
            <Card>
                <div>
                    <h4>Schedule</h4>
                </div>
                <div className="mt-4">
                    <GanttChart
                        tasks={tasks}
                        colorsMap={colorsMap}
                        onDateChange={handleTaskChange}
                        onProgressChange={handleProgressChange}
                        onExpanderClick={handleExpanderClick}
                    />
                </div>
            </Card>
        </main>
    )
}

export default Scheduler

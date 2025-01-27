import AddUserIcon from '@/assets/icons/AddUser'
import { Card } from '@/components/ui'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateOrder = () => {
    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">Order Details</p>
                <Link
                    to="/overview/create-job-order"
                    className="flex items-center gap-2 border border-primary rounded-xl py-3 px-4 font-bold text-white bg-primary hover:bg-primary-deep"
                >
                    <span>
                        <AddUserIcon />
                    </span>
                    New Order
                </Link>
            </div>
            <Card></Card>
        </main>
    )
}

export default CreateOrder

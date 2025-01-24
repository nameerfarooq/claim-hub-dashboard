import { Button } from '@/components/ui'
import React from 'react'
import { TbDots } from 'react-icons/tb'

const Contact = () => {
    return (
        <main className="bg-white p-4 rounded-2xl border border-gray-200 h-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Contacts</h1>
                <Button variant="default" icon={<TbDots />}>
                    Download
                </Button>
            </div>
        </main>
    )
}

export default Contact

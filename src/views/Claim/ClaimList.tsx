import { Button, Tag } from '@/components/ui'
import React from 'react'
import { TbCloudDownload, TbDots } from 'react-icons/tb'
import user from '@/assets/Images/user.png'
import RowSelection from '@/components/custom/AdvancedTable'
import Checkbox from '@/components/ui/Checkbox'
import { useRef, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import type { CheckboxProps } from '@/components/ui/Checkbox'
import AddUserIcon from '@/assets/icons/AddUser'
import EditPencilIcon from '@/assets/icons/EditPencil'
import ViewEyeIcon from '@/assets/icons/ViewEye'
import { MdDeleteOutline } from 'react-icons/md'

type CheckBoxChangeEvent = ChangeEvent<HTMLInputElement>

interface IndeterminateCheckboxProps extends Omit<CheckboxProps, 'onChange'> {
    onChange: (event: CheckBoxChangeEvent) => void
    indeterminate: boolean
    onCheckBoxChange?: (event: CheckBoxChangeEvent) => void
    onIndeterminateCheckBoxChange?: (event: CheckBoxChangeEvent) => void
}

function IndeterminateCheckbox({
    indeterminate,
    onChange,
    ...rest
}: IndeterminateCheckboxProps) {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (typeof indeterminate === 'boolean' && ref.current) {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return <Checkbox ref={ref} onChange={(_, e) => onChange(e)} {...rest} />
}

const ClaimList = () => {
    const tableData = [
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            category: 'Residential',
            city: 'New York',
            phone: '(618) 474-9169',
            stage: 'Lorem',
            lastTouched: '12/12/24 - 01:25:49',
            label: ['Water', 'Hurricane'],
            owner: 'Lorem',
        },
    ]

    const columns = [
        {
            id: 'select',
            header: ({ table }) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            ),
            cell: ({ row }) => (
                <div className="px-1">
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <img
                        src={row.original.name.media}
                        alt={row.original.name.fullName}
                        className="w-8 h-8 rounded-full"
                    />
                    <span>{row.original.name.fullName}</span>
                </div>
            ),
        },
        {
            header: 'Category',
            accessorKey: 'category',
            enableSorting: true,
        },
        {
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
        },
        {
            header: 'Phone',
            accessorKey: 'phone',
            enableSorting: true,
        },
        {
            header: 'Stage',
            accessorKey: 'stage',
            enableSorting: true,
        },
        {
            header: 'Last Touched',
            accessorKey: 'lastTouched',
            enableSorting: true,
        },
        {
            header: 'Label',
            accessorKey: 'label',
            enableSorting: true,
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    {row.original.label.map((item, index) => (
                        <Tag
                            key={index}
                            className={` ${
                                item === 'Water'
                                    ? 'bg-sky-200'
                                    : item === 'Hurricane'
                                      ? 'bg-red-200'
                                      : ''
                            }`}
                        >
                            {item}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            header: 'Owner',
            accessorKey: 'owner',
            enableSorting: true,
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            enableSorting: false, // Disable sorting for the Actions column
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    <button onClick={() => handleView(row.original)}>
                        <EditPencilIcon />
                    </button>
                    <button onClick={() => handleEdit(row.original)}>
                        <ViewEyeIcon />
                    </button>
                    <button onClick={() => handleDelete(row.original)}>
                        <MdDeleteOutline size={20} className="text-black" />
                    </button>
                </div>
            ),
        },
    ]

    const handleView = (rowData: any) => {
        console.log('View:', rowData)
        // Add logic
    }

    const handleEdit = (rowData: any) => {
        console.log('Edit:', rowData)
        // Add logic
    }

    const handleDelete = (rowData: any) => {
        console.log('Delete:', rowData)
        // Add logic
    }

    return (
        <main className="bg-white p-4 rounded-2xl border border-gray-200 h-full flex flex-col gap-[20px]">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Claims Lists</h1>
                <div className="flex flex-row gap-[10px]">
                    <Button variant="default" icon={<TbCloudDownload />}>
                        Download
                    </Button>
                    <button className="flex items-center gap-2 border border-primary rounded-xl px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-deep">
                        <span>
                            <AddUserIcon />
                        </span>
                        Add new
                    </button>
                </div>
            </div>
            <div>
                <RowSelection data={tableData} columns={columns} />
            </div>
        </main>
    )
}

export default ClaimList

import { Button } from '@/components/ui'
import React from 'react'
import { TbCloudDownload } from 'react-icons/tb'
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

const Contact = () => {
    const tableData = [
        {
            id: 1,
            name: {
                media: user,
                fullName: 'Angelina Gotelli',
            },
            city: 'New York',
            phone: '(212) 555-7890',
            type: 'Software Engineer',
            company: 'TechCorp',
            value: 1200.75,
            dateCreated: '01/15/24-08:45:12',
        },
        {
            id: 2,
            name: {
                media: user,
                fullName: 'Michael Thompson',
            },
            city: 'Los Angeles',
            phone: '(310) 555-0123',
            type: 'Product Manager',
            company: 'Innovate Inc.',
            value: 985.5,
            dateCreated: '02/20/24-14:30:45',
        },
        {
            id: 3,
            name: {
                media: user,
                fullName: 'Sophia Williams',
            },
            city: 'Chicago',
            phone: '(312) 555-4567',
            type: 'UI/UX Designer',
            company: 'DesignHub',
            value: 765.0,
            dateCreated: '03/10/24-11:15:30',
        },
        {
            id: 4,
            name: {
                media: user,
                fullName: 'David Johnson',
            },
            city: 'Houston',
            phone: '(713) 555-6789',
            type: 'Data Analyst',
            company: 'DataPros',
            value: 1450.25,
            dateCreated: '04/25/24-09:20:10',
        },
        {
            id: 5,
            name: {
                media: user,
                fullName: 'Emily Davis',
            },
            city: 'San Francisco',
            phone: '(415) 555-0987',
            type: 'DevOps Engineer',
            company: 'Cloudify',
            value: 1300.0,
            dateCreated: '05/05/24-17:50:05',
        },
        {
            id: 6,
            name: {
                media: user,
                fullName: 'Ethan Moore',
            },
            city: 'Seattle',
            phone: '(206) 555-2468',
            type: 'Frontend Developer',
            company: 'Webify',
            value: 1050.0,
            dateCreated: '06/10/24-10:15:25',
        },
        {
            id: 7,
            name: {
                media: user,
                fullName: 'Charlotte Brown',
            },
            city: 'Denver',
            phone: '(303) 555-7891',
            type: 'Marketing Specialist',
            company: 'BrandBoost',
            value: 780.5,
            dateCreated: '07/18/24-13:45:00',
        },
        {
            id: 8,
            name: {
                media: user,
                fullName: 'Oliver Martinez',
            },
            city: 'Miami',
            phone: '(305) 555-3412',
            type: 'Backend Developer',
            company: 'CodeWorks',
            value: 1120.3,
            dateCreated: '08/05/24-09:00:18',
        },
        {
            id: 9,
            name: {
                media: user,
                fullName: 'Amelia Harris',
            },
            city: 'Austin',
            phone: '(512) 555-6678',
            type: 'Human Resources Manager',
            company: 'PeopleFirst',
            value: 890.25,
            dateCreated: '09/12/24-16:25:35',
        },
        {
            id: 10,
            name: {
                media: user,
                fullName: 'James Wilson',
            },
            city: 'Dallas',
            phone: '(972) 555-1234',
            type: 'Business Analyst',
            company: 'InsightPro',
            value: 1325.75,
            dateCreated: '10/01/24-12:10:00',
        },
        {
            id: 11,
            name: {
                media: user,
                fullName: 'Isabella Clark',
            },
            city: 'San Diego',
            phone: '(619) 555-0987',
            type: 'Project Manager',
            company: 'PlanMaster',
            value: 1475.5,
            dateCreated: '11/08/24-14:50:10',
        },
        {
            id: 12,
            name: {
                media: user,
                fullName: 'Liam Anderson',
            },
            city: 'Boston',
            phone: '(617) 555-6789',
            type: 'Data Scientist',
            company: 'DataMinds',
            value: 1650.0,
            dateCreated: '12/02/24-11:30:45',
        },
        {
            id: 13,
            name: {
                media: user,
                fullName: 'Mia Walker',
            },
            city: 'Atlanta',
            phone: '(404) 555-1122',
            type: 'Software Architect',
            company: 'TechVision',
            value: 1900.8,
            dateCreated: '12/20/24-09:15:00',
        },
        {
            id: 14,
            name: {
                media: user,
                fullName: 'Benjamin Taylor',
            },
            city: 'Phoenix',
            phone: '(602) 555-3322',
            type: 'Cloud Engineer',
            company: 'SkyNet Solutions',
            value: 1350.2,
            dateCreated: '01/05/25-15:25:50',
        },
        {
            id: 15,
            name: {
                media: user,
                fullName: 'Emma Carter',
            },
            city: 'Las Vegas',
            phone: '(702) 555-2244',
            type: 'AI Researcher',
            company: 'FutureAI',
            value: 2500.0,
            dateCreated: '01/15/25-10:00:10',
        },
        {
            id: 16,
            name: {
                media: user,
                fullName: 'Noah White',
            },
            city: 'Detroit',
            phone: '(313) 555-4455',
            type: 'Machine Learning Engineer',
            company: 'AutoLearn',
            value: 1875.75,
            dateCreated: '01/25/25-12:35:00',
        },
        {
            id: 17,
            name: {
                media: user,
                fullName: 'Ava Hall',
            },
            city: 'Charlotte',
            phone: '(704) 555-9988',
            type: 'SEO Specialist',
            company: 'SearchBoost',
            value: 950.0,
            dateCreated: '02/05/25-14:40:00',
        },
        {
            id: 18,
            name: {
                media: user,
                fullName: 'Lucas Lewis',
            },
            city: 'Philadelphia',
            phone: '(215) 555-7788',
            type: 'Cybersecurity Analyst',
            company: 'SecureTech',
            value: 1580.5,
            dateCreated: '02/15/25-16:20:15',
        },
        {
            id: 19,
            name: {
                media: user,
                fullName: 'Harper Young',
            },
            city: 'Portland',
            phone: '(503) 555-6677',
            type: 'Content Strategist',
            company: 'CreativeCo',
            value: 1125.0,
            dateCreated: '03/01/25-09:45:10',
        },
        {
            id: 20,
            name: {
                media: user,
                fullName: 'Mason Scott',
            },
            city: 'San Antonio',
            phone: '(210) 555-4466',
            type: 'Full Stack Developer',
            company: 'Buildify',
            value: 1400.0,
            dateCreated: '03/15/25-11:50:25',
        },
        {
            id: 21,
            name: {
                media: user,
                fullName: 'Ella Green',
            },
            city: 'Columbus',
            phone: '(614) 555-8899',
            type: 'Technical Writer',
            company: 'DocuFlow',
            value: 780.0,
            dateCreated: '03/25/25-13:00:00',
        },
        {
            id: 22,
            name: {
                media: user,
                fullName: 'Logan Baker',
            },
            city: 'Orlando',
            phone: '(407) 555-5599',
            type: 'Network Administrator',
            company: 'NetLink',
            value: 1350.0,
            dateCreated: '04/01/25-16:45:00',
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
            header: 'Type',
            accessorKey: 'type',
            enableSorting: true,
        },
        {
            header: 'Company',
            accessorKey: 'company',
            enableSorting: true,
        },
        {
            header: 'Value',
            accessorKey: 'value',
            enableSorting: true,
        },
        {
            header: 'Date Created',
            accessorKey: 'dateCreated',
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
                <h1 className="text-2xl font-bold">Contacts</h1>
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

export default Contact

import classNames from '@/utils/classNames'
import { HEADER_HEIGHT } from '@/constants/theme.constant'
import type { ReactNode } from 'react'
import type { CommonProps } from '@/@types/common'
import { TbSettings } from 'react-icons/tb'
import { Avatar, Badge } from '../ui'
import { PiBellDuotone } from 'react-icons/pi'

interface HeaderProps extends CommonProps {
    headerStart?: ReactNode
    headerEnd?: ReactNode
    headerMiddle?: ReactNode
    container?: boolean
    wrapperClass?: string
}

const Header = (props: HeaderProps) => {
    const {
        headerStart,
        headerEnd,
        headerMiddle,
        className,
        container,
        wrapperClass,
    } = props

    return (
        <header className={classNames('header', className)}>
            <div
                className={classNames(
                    'header-wrapper',
                    container && 'container mx-auto',
                    wrapperClass,
                )}
                style={{ height: HEADER_HEIGHT }}
            >
                <div className="header-action header-action-start">
                    {headerStart}
                </div>
                {headerMiddle && (
                    <div className="header-action header-action-middle">
                        {headerMiddle}
                    </div>
                )}
                <div className="header-action header-action-end">
                    <div className="flex flex-row gap-2">
                        <div className="relative">
                            <Badge className="absolute top-0 right-0 z-10" />
                            <Avatar
                                size={'sm'}
                                className="bg-white"
                                icon={<PiBellDuotone size={24} />}
                            />
                        </div>
                        <button>
                            <TbSettings size={28} />
                        </button>
                    </div>
                    {headerEnd}
                </div>
            </div>
        </header>
    )
}

export default Header

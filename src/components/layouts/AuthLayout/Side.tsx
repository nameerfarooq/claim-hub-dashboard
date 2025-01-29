import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'

type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    return (
        <div className="flex h-full p-6 bg-white dark:bg-gray-800">
            {/* <div className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative xl:max-w-[520px] 2xl:max-w-[720px]"> */}
            <div className="bg-gradient-to-r from-[#3DBCEF] to-[#1A80D1] py-6 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative ">
                <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-fit px-5">
                    <img src="/img/others/auth-side-bg.png" className="" />
                    <p className='text-center font-bold text-white text-[35px] pt-[40px] px-5'>
                        Restoration job documentation <br /> all in <span className='text-[#386ff5]'> one </span>
                        place
                    </p>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center flex-1">
                <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Side

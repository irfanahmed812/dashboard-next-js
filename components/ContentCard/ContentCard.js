import React from 'react';
import './ContentCard.css';
import { Open_Sans } from 'next/font/google';
import btn1 from '../assets/btnAddf.png'
import btn2 from '../assets/btnAdd.png'
import Image from 'next/image';

const OpenSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })


const ContentCard = () => {

    const cardMenus = [
        {
            id: 'sdljd',
            name: 'To-Do List',
            count: 24,
            icon: btn1,
            iconClass: 'h-14 w-14',
            details: [
                {
                    id: 'dfkslf',
                    marginClass: 'mt-4',
                    dotBgColor: 'bg-[#FFAB2D]',
                    progressBar: 'w-[30%]',
                    dotName: 'Important',
                    textColor: 'text-[#FFAB2D]',
                    title: 'Create sign up sheet for holiday student/parent conferences.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
                {
                    id: 'sfdsfs',
                    marginClass: 'mt-4',
                    dotBgColor: 'bg-[#E328AF]',
                    progressBar: 'w-[45%]',
                    dotName: 'Instructor Meeting',
                    textColor: 'text-[#E328AF]',
                    title: 'Plan holiday demonstration program. Create outline.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
                {
                    id: 'sfdsfes',
                    marginClass: 'mt-4',
                    dotBgColor: 'bg-[#38E25D]',
                    progressBar: 'w-[20%]',
                    dotName: 'Databse',
                    textColor: 'text-[#38E25D]',
                    title: 'Determine how many boards need to be ordered for testing and demo.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
            ]
        },
        {
            id: 'sdlj23d',
            name: 'In Progress',
            count: 2,
            icon: btn2,
            iconClass: 'h-12 w-12',
            details: [
                {
                    id: 'dfkslsf',
                    marginClass: 'mt-6',
                    dotBgColor: 'bg-[#5ECFFF]',
                    progressBar: 'w-[85%]',
                    dotName: 'Video',
                    textColor: 'text-[#5ECFFF]',
                    title: 'Create sparring tutorial video for the weekly class.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
                {
                    id: 'sfsfddsfs',
                    marginClass: 'mt-[15px]',
                    dotBgColor: 'bg-[#FF4A55]',
                    progressBar: 'w-[97%]',
                    dotName: 'BUGS FIXING',
                    textColor: 'text-[#FF4A55]',
                    title: 'Payment gateway needs reauthorization.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
            ]
        },
        {
            id: 'sdlj23d6',
            name: 'Done',
            count: 3,
            icon: btn2,
            iconClass: 'h-12 w-12',
            details: [
                {
                    id: 'sfsfddsfs',
                    marginClass: 'mt-6',
                    dotBgColor: 'bg-[#FF4A55]',
                    progressBar: 'w-full',
                    dotName: 'BUGS FIXING',
                    textColor: 'text-[#FF4A55]',
                    title: 'Payment gateway needs reauthorization.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
                {
                    id: 'sfdsfeas',
                    marginClass: 'mt-[15px]',
                    dotBgColor: 'bg-[#38E25D]',
                    progressBar: 'w-full',
                    dotName: 'Databse',
                    textColor: 'text-[#38E25D]',
                    title: 'Determine how many boards need to be ordered for testing and demo.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
                {
                    id: 'sfdsasfs',
                    marginClass: 'mt-[15px]',
                    dotBgColor: 'bg-[#E328AF]',
                    progressBar: 'w-full',
                    dotName: 'Instructor Meeting',
                    textColor: 'text-[#E328AF]',
                    title: 'Plan holiday demonstration program. Create outline.',
                    people: <div className=" -space-x-3 my-5 overflow-hidden">
                        <div className="inline-block h-[25px] w-[25px] rounded-full bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                        <div className="inline-block h-[25px] w-[25px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                    </div>
                },
            ]
        },
    ]


    return (
        <div className='p-3 mt-4'>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 justify-center md:gap-6 xl:gap-3">
                {/* section (1,2,3) from data */}
                {
                    cardMenus?.map(menu => <div key={menu?.id} className='mt-4 md:mt-2 lg:mt-0'>
                        <div className="flex justify-between items-center">
                            {/* heading title */}
                            <h1 className='font-bold ms-6 text-center text-[20px] text-white'>{menu?.name} ({menu?.count})</h1>
                            {/* plus icon */}
                            <Image src={menu?.icon} width={200} height={200} alt='icon' className={`object-cover cursor-pointer ${menu?.iconClass}`} />
                        </div>
                        {
                            menu?.details?.map(detailsMenu => <div key={detailsMenu?.id} className={`card w-full xl:h-[300px] h-[250px] mb-2 p-6 ${detailsMenu?.marginClass}`}>
                                <div className="flex justify-between items-center">
                                    {/* highlight name and icon */}
                                    <div className='flex items-center'>
                                        <div className={`rounded-full h-[10px] w-[10px] ${detailsMenu?.dotBgColor}`}></div>
                                        <span className={`${detailsMenu?.textColor} ms-2 text-[14px] ${OpenSans.className}`}>{detailsMenu?.dotName}</span>
                                    </div>
                                    {/* 3 dot icon */}
                                    <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                                        <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                                        <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                                    </svg></div>
                                </div>
                                {/* title name */}
                                <h1 className='text-[18px] font-semibold my-3'>{detailsMenu?.title}</h1>
                                {/* progress bar */}
                                <div className="mt-6">
                                    <div className="w-full h-2 bg-[#1E1C3A] rounded-full">
                                        <div className={`${detailsMenu?.progressBar} h-full text-center text-xs text-white ${detailsMenu?.dotBgColor} rounded-full`}>
                                        </div>
                                    </div>
                                </div>
                                {/* people avatar group */}
                                <div className="flex justify-between items-center mt-6 text-start">
                                    <div className='flex justify-start'>
                                        {detailsMenu?.people}
                                    </div>
                                    <div>
                                        <div className='flex items-center'>
                                            {/* clock icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_1_340)">
                                                    <path d="M7.99996 0.666622C6.54957 0.666622 5.13174 1.09671 3.92578 1.90251C2.71982 2.70831 1.77989 3.85362 1.22485 5.19361C0.669803 6.5336 0.524579 8.00809 0.807537 9.43062C1.0905 10.8531 1.78893 12.1598 2.81451 13.1854C3.8401 14.211 5.14677 14.9094 6.5693 15.1924C7.99183 15.4753 9.46632 15.3301 10.8063 14.7751C12.1463 14.22 13.2916 13.2801 14.0974 12.0741C14.9032 10.8682 15.3333 9.45035 15.3333 7.99996C15.331 6.05574 14.5576 4.19181 13.1829 2.81704C11.8081 1.44227 9.94418 0.668916 7.99996 0.666622ZM7.99996 14C6.81327 14 5.65324 13.6481 4.66654 12.9888C3.67985 12.3295 2.91081 11.3924 2.45669 10.2961C2.00256 9.1997 1.88374 7.9933 2.11525 6.82941C2.34676 5.66553 2.91821 4.59643 3.75732 3.75731C4.59644 2.9182 5.66553 2.34676 6.82942 2.11524C7.99331 1.88373 9.19971 2.00255 10.2961 2.45668C11.3924 2.9108 12.3295 3.67984 12.9888 4.66653C13.6481 5.65323 14 6.81327 14 7.99996C13.998 9.59066 13.3653 11.1157 12.2405 12.2405C11.1157 13.3653 9.59066 13.998 7.99996 14Z" fill="#A5A5A5" />
                                                    <path d="M8.66671 7.72403V4.00004C8.66671 3.82323 8.59647 3.65366 8.47144 3.52863C8.34642 3.40361 8.17685 3.33337 8.00004 3.33337C7.82323 3.33337 7.65366 3.40361 7.52864 3.52863C7.40361 3.65366 7.33337 3.82323 7.33337 4.00004V8.00003C7.33341 8.17683 7.40367 8.34637 7.52871 8.47136L9.52871 10.4714C9.65444 10.5928 9.82284 10.66 9.99764 10.6585C10.1724 10.657 10.3396 10.5868 10.4633 10.4632C10.5869 10.3396 10.657 10.1724 10.6585 9.99763C10.66 9.82283 10.5928 9.65443 10.4714 9.5287L8.66671 7.72403Z" fill="#A5A5A5" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_340">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className={`text-[#A5A5A5] font-semibold ms-1 text-[12px] ${OpenSans.className}`}>Due in 4 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>)
                }
                {/* section (4) */}
                <div className='mt-4 md:mt-2 lg:mt-0'>
                    <div className="flex justify-between items-center mb-7">
                        <h1 className='font-bold ms-6 text-center text-[20px] text-white'>Revised (0)</h1>
                        <Image src={btn2} width={200} height={200} alt='icon' className={`object-cover cursor-pointer h-12 w-12`} />
                    </div>
                    <div className="card h-24 w-full p-4 my-4">
                        <div className={`border-dashed border-2 cursor-pointer my-2 p-2 font-semibold text-[16px] text-[#7879F1] bg-[#15132B] rounded-lg border-[#7879F1] text-center flex items-center justify-center ${OpenSans.className}`}>
                            Move card here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
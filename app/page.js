import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import companyLogo from '../components/assets/company-logo.png'
import Link from 'next/link'
import ContentCard from '@/components/ContentCard/ContentCard'

const OpenSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })


export default function Home() {

  return (
    <div className='px-2'>
      <div className="main-card w-full p-8 mt-5">

        <div className="grid grid-rows-1 xl:grid-cols-3 lg:grid-cols-1 lg:gap-6 xl:gap-3">
          {/* grid no. 1 */}
          <div className='lg:col-span-2'>
            <div className="flex">
              <span className='me-4'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <path d="M4.08496 19C4.08496 25.9411 9.07398 32.1336 15.8676 33.5856C19.2622 34.311 22.8718 33.8223 25.9433 32.2039C28.8993 30.6463 31.2884 28.0927 32.6423 25.0375C34.051 21.8595 34.2965 18.2112 33.3358 14.871C32.4094 11.6486 30.376 8.79133 27.6465 6.84611C21.94 2.77897 13.9247 3.32275 8.81102 8.10771C5.81434 10.9117 4.08496 14.8953 4.08496 19ZM11.8544 18.1944L16.0196 14.0296C17.0593 12.99 18.6716 14.6023 17.6316 15.642L15.5393 17.7339L25.2133 17.7339C25.9034 17.7339 26.4795 18.3103 26.4795 19.0004C26.4795 19.6905 25.9034 20.267 25.2133 20.267L15.491 20.267L17.5423 22.368C18.5679 23.4175 16.9407 25.0151 15.9109 23.9606L11.8449 19.7965C11.4087 19.3504 11.4129 18.636 11.8544 18.1944Z" fill="#A5A5A5" />
              </svg></span>
              <p className='font-bold text-[28px] leading-9 flex'>School November Tasks</p>
            </div>
            <p className={`text-[14px] text-[#A5A5A5] font-normal ms-[54px] my-3 ${OpenSans.className}`}>Created by Instructor Day on November 31, 2022</p>
            {/* avatar */}
            <div className="md:flex block">
              <div className="flex -space-x-3 ms-[54px] my-5 overflow-hidden">
                <div className="inline-block h-[36px] w-[36px] rounded-full bg-[#C4C4C4]"></div>
                <div className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                <div className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                <div className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-[#15132B] bg-[#C4C4C4]"></div>
                <div className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-[#15132B] bg-[#E328AF] text-center"><span className="relative top-[4px] font-bold text-[15px]">5+</span></div>
              </div>
              {/* button like (invite people - comment) */}
              <div className='items-center flex flex-col md:flex-row mt-5 md:mt-0 text-start ms-0'>
                <div className='mx-[5px] md:mt-0 mt-5'>
                  <Link href='#' className='bg-[#6418C3] rounded-xl p-[7px] flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none">
                      <path d="M13.1572 13.328H7.81715C6.27151 13.3298 4.7897 13.9447 3.69677 15.0376C2.60383 16.1305 1.989 17.6123 1.98715 19.158V20.938C1.98715 21.0706 2.03983 21.1978 2.1336 21.2915C2.22737 21.3853 2.35454 21.438 2.48715 21.438H18.4872C18.6198 21.438 18.7469 21.3853 18.8407 21.2915C18.9345 21.1978 18.9872 21.0706 18.9872 20.938V19.158C18.9856 17.6122 18.3708 16.1303 17.2778 15.0373C16.1848 13.9443 14.7029 13.3296 13.1572 13.328Z" fill="white" />
                      <path d="M10.487 11.438C12.9723 11.438 14.987 9.42333 14.987 6.93805C14.987 4.45277 12.9723 2.43805 10.487 2.43805C8.00172 2.43805 5.987 4.45277 5.987 6.93805C5.987 9.42333 8.00172 11.438 10.487 11.438Z" fill="white" />
                      <path d="M21 10H19.5V8.5C19.5 8.23478 19.3946 7.98043 19.2071 7.79289C19.0196 7.60536 18.7652 7.5 18.5 7.5C18.2348 7.5 17.9804 7.60536 17.7929 7.79289C17.6054 7.98043 17.5 8.23478 17.5 8.5V10H16C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11C15 11.2652 15.1054 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H17.5V13.5C17.5 13.7652 17.6054 14.0196 17.7929 14.2071C17.9804 14.3946 18.2348 14.5 18.5 14.5C18.7652 14.5 19.0196 14.3946 19.2071 14.2071C19.3946 14.0196 19.5 13.7652 19.5 13.5V12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10Z" fill="white" />
                    </svg>
                    <span className='font-bold text-[15px] ms-2 text-white'>Invite People</span>
                  </Link>
                </div>
                <div className='mx-[5px] md:mt-0 mt-5'>
                  <Link href='#' className='border-[#7879F1] border rounded-xl p-[5px]'>
                    <span className='font-bold text-[15px] px-2 text-white'>Private</span>
                  </Link>
                </div>

                <div className='mx-[5px] md:mt-0 mt-6'>
                  <Link href='#' className='bg-[#7879F1] rounded-xl p-[5px]'>
                    <span className='font-bold text-[15px] px-2 text-white'>Edit</span>
                  </Link>
                </div>
                <div className='mx-[5px] md:mt-0 mt-5'>
                  <Link href='#' className='border-[#7879F1] border rounded-xl p-[7px] flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none">
                      <path d="M18 0.999939H5.99995C4.67436 1.00153 3.40351 1.52882 2.46617 2.46616C1.52884 3.4035 1.00154 4.67434 0.999954 5.99994V13.9999C1.00141 15.1521 1.40004 16.2686 2.12867 17.1612C2.8573 18.0538 3.87137 18.6678 4.99995 18.8999V21.9999C4.99993 22.181 5.04905 22.3586 5.14208 22.5139C5.23511 22.6693 5.36856 22.7964 5.52819 22.8818C5.68782 22.9672 5.86764 23.0077 6.04847 22.9989C6.2293 22.9901 6.40435 22.9324 6.55495 22.8319L12.3 18.9999H18C19.3256 18.9984 20.5964 18.4711 21.5337 17.5337C22.4711 16.5964 22.9984 15.3255 23 13.9999V5.99994C22.9984 4.67434 22.4711 3.4035 21.5337 2.46616C20.5964 1.52882 19.3256 1.00153 18 0.999939ZM16 12.9999H7.99995C7.73474 12.9999 7.48038 12.8946 7.29285 12.707C7.10531 12.5195 6.99995 12.2652 6.99995 11.9999C6.99995 11.7347 7.10531 11.4804 7.29285 11.2928C7.48038 11.1053 7.73474 10.9999 7.99995 10.9999H16C16.2652 10.9999 16.5195 11.1053 16.7071 11.2928C16.8946 11.4804 17 11.7347 17 11.9999C17 12.2652 16.8946 12.5195 16.7071 12.707C16.5195 12.8946 16.2652 12.9999 16 12.9999ZM18 8.99994H5.99995C5.73474 8.99994 5.48038 8.89458 5.29285 8.70705C5.10531 8.51951 4.99995 8.26516 4.99995 7.99994C4.99995 7.73472 5.10531 7.48037 5.29285 7.29283C5.48038 7.1053 5.73474 6.99994 5.99995 6.99994H18C18.2652 6.99994 18.5195 7.1053 18.7071 7.29283C18.8946 7.48037 19 7.73472 19 7.99994C19 8.26516 18.8946 8.51951 18.7071 8.70705C18.5195 8.89458 18.2652 8.99994 18 8.99994Z" fill="white" />
                    </svg>
                    <span className='font-semibold text-[14px] ms-2 text-white'>45 Comments</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* grid no. 2 */}
          <div className='md:mt-8 mt-5'>
            <div className="flex items-center justify-end text-end">
              <div className='me-3'>
                <h1 className='font-bold text-[18px] text-[#FFF]'>Centered Martial Arts</h1>
                <p className={`text-[#A5A5A5] text-[14px] font-normal ${OpenSans.className}`}>Sunnyvale, Ca</p>
              </div>
              <div className="companylogo w-14 h-14 flex justify-center items-center">
                <Image src={companyLogo} width={200} height={200} alt='companyLogo' className='w-10 h-10' />
              </div>
              <div className='ms-4 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12.5" cy="3.5" r="2.5" fill="#A5A5A5" />
                <circle cx="12.5" cy="11.5" r="2.5" fill="#A5A5A5" />
                <circle cx="12.5" cy="19.5" r="2.5" fill="#A5A5A5" />
              </svg></div>
            </div>
            <div className='xl:mt-16 md:mt-9 mt-5 grid md:grid-cols-2 grid-cols-1 grid-rows-1 items-center xl:gap-2 lg:gap-6'>
              <p className={`text-[16px] font-semibold xl:text-center mb-3 md:text-end md:me-3 text-white ${OpenSans.className}`}>Total Progress 60%</p>
              <div className="w-full h-3 bg-[#1E1C3A] rounded-full">
                <div className="w-[60%] h-full text-center text-xs text-white bg-[#6418C3] rounded-full">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* content card */}
      <ContentCard></ContentCard>

    </div>
  )
}

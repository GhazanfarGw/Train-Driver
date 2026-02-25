import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#324E91]'>
            <div className='max-w-7xl mx-auto justify-center md:pt-20 md:pb-10 md:px-10 py-10'>
                <h1 className='text-[#aaa] md:text-base text-sm justify-center md:pb-5 px-5'>
                    Website last updated: February 25, 2026
                </h1>
                <span className="py-2 md:px-0">
                    <a href="/">
                        <img src='./white logo.png' className='w-52 md:px-0 pl-5' alt='favicon.png'/>
                    </a>
                </span>
                <div className='md:grid md:grid-cols-4 md:gap-8 max-w-screen-2xl mx-auto justify-center md:py-5 text-white px-7'>
                    <div className=''>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Prepare confidently for your train driver interview
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-3'>
                            Learn how train driver interviews are structured, how responses are evaluated, and how to present your experience clearly and professionally.
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Contact Us
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            info@traindriverprep.co.uk 
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Address
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            124-128 City Road, London, England, EC1V 2NX
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Community
                        </h1>
                        <div className="flex flex-row gap-7 pt-5">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/traindriverprep"
                                rel="noreferrer"
                                className="text-[#ffffff] items-center text-sm relative uppercase duration-200 flex justify-center flex-row hover:text-[#136690] border border-[#136690] rounded-full px-2 py-2"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current stroke-current h-6 w-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 
                                    0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.657 0 3 
                                    1.343 3 3v10c0 1.657-1.343 3-3 3H7c-1.657 
                                    0-3-1.343-3-3V7c0-1.657 1.343-3 3-3zm5 
                                    3a5 5 0 100 10 5 5 0 000-10zm0 
                                    2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 
                                    1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.tiktok.com/@traindriverprep"
                                rel="noreferrer"
                                className="text-[#ffffff] items-center text-sm relative uppercase duration-200 flex justify-center flex-row hover:text-[#136690] border border-[#136690] rounded-full px-2 py-2"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current h-6 w-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.5 3c.3 1.7 1.6 3 3.3 3.3v3.1c-1.2 
                                    0-2.3-.3-3.3-.9V14a5 5 0 11-5-5c.3 
                                    0 .7 0 1 .1v3.2c-.3-.1-.6-.2-1-.2a2 
                                    2 0 102 2V3h3z"/>
                                </svg>
                            </a>
                            {/* <a 
                                target="_black" href="https://www.google.com/maps/search/Floor,+Suite+23,+63-66+Hatton+Garden,+5th,+London+EC1N+8BQ,+United+Kingdom/@51.5209705,-0.1089695,21z" 
                                className="items-center text-sm relative uppercase duration-200 flex justify-center flex-row border border-[#136690] rounded-full px-2 py-2 hover:text-[#136690]"
                                rel="noreferrer">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100.000000 100.000000"
                                    className=" fill-current stroke-current h-5 w-5"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    fill="#fff" stroke="none">
                                    <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
                                    120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
                                    -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                                    80 80 19 0 40 -9 55 -25z"/>
                                    <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
                                    60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
                                    -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
                                    -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
                                    -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
                                    </g>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className='mx-auto justify-center px-5 border-t py-5 border-[#136690]'>
                    <div className=''>
                        <p className='md:text-sm text-xs text-[#C3CDD3] text-center'>
                            Train Driver Prep. © 2026. All right reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;



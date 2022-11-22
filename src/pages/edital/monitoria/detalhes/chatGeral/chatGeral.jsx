import React from 'react'

export default function ChatGeral() {
    return (
        <div className="mx-auto max-w-3xl">            
            <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-8 p-4">                  
                <li className="mb-10 ml-6">            
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        
                    </span>
                    <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                            Bonnie moved 
                            <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">
                            &nbsp;Jese Leos
                            </a> to 
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                Funny Group
                            </span>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        
                    </span>
                    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div className="justify-between items-center mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
                        </div>
                        <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                    </div>
                </li>
                <li className="ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        
                    </span>
                    <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
                        <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span className="font-semibold text-gray-900 dark:text-white">Finished</span></div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

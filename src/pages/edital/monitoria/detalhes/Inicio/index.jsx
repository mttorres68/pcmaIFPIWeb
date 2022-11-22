import React from 'react'

export default function Dashboard() {
    return (
        <div className="mx-auto max-w-3xl">
            <ol className= "bg-gray-200 rounded-lg bg-opacity-80 relative border-l border-gray-200 mt-8 p-4 ">                  
                <li className="mb-10 ml-6 ">            
                    <span 
                        className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 ">
                        <svg 
                            aria-hidden="true" 
                            className="w-3 h-3 text-blue-600 dark:text-blue-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fillRule="evenodd" 
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                        Atividade de D-ER - Livraria.
                        <span 
                            className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-3xl dark:bg-blue-200 dark:text-blue-800 ml-3">
                                Nova
                        </span>
                    </h3>
                    <time 
                        className="block mb-2 text-sm font-normal leading-none text-gray-600"
                    >
                        Lançado em 24 de Novembro de 2022 as 08hrs
                    </time>
                    <p 
                        className="mb-4 text-base font-normal text-gray-800"
                    >
                        Hoje, teremos uma atividade prática de Diagrama Entidade-Relacionamento.
                    </p>
                    <a 
                        href="https://drive.google.com/file/d/1FnczAfLqsU5sq-SGdw6tuyPtOJkt0dzu/view?usp=share_link" 
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <svg 
                            className="mr-2 w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" 
                                clipRule="evenodd">
                            </path>
                        </svg> 
                        Baixar atividade
                    </a>
                </li>
                <li className="mb-10 ml-6">
                    <span 
                        className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg 
                            aria-hidden="true" 
                            className="w-3 h-3 text-blue-600 dark:text-blue-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fillRule="evenodd" 
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Hoje, teremos uma aula on-line, às 18:10h, via Google Meet 👍.
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
                            Lançado em 21 de Novembro de 2022 as 20hrs
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800">
                        Para resolvermos a questão da atividade passada. 
                        <a href="" className="text-light-blue-600"> Clique aqui para acessar a aula</a>
                    </p>
                </li>
                <li className="ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg 
                            aria-hidden="true" 
                            className="w-3 h-3 text-blue-600 dark:text-blue-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fillRule="evenodd" 
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                                    clipRule="evenodd"
                                >
                                </path>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Hoje, teremos uma atividade prática de Diagrama Entidade-Relacionamento.
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
                        Lancaçado em 18 de Novembro de 2022 as 14hrs
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800">
                        Baixem a atividade 😉
                    </p>
                    <a 
                        href="https://drive.google.com/file/d/1FnczAfLqsU5sq-SGdw6tuyPtOJkt0dzu/view?usp=share_link" 
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <svg 
                            className="mr-2 w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" 
                                clipRule="evenodd">
                            </path>
                        </svg> 
                        Baixar atividade
                    </a>
                </li>
            </ol>
        </div>
    )
}

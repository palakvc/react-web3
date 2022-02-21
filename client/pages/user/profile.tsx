import React, { useState } from "react";
const tabs = [
    { "id": "0", "title": "Created" },
    { "id": "1", "title": "Collected" },
    { "id": "2", "title": "Collection" },
    { "id": "3", "title": "Liked" },
]
function UserProfile(): JSX.Element {
    const [tab, setTab] = useState<string>("0")
    const handleTabChange = (tabId: string): void => {
        setTab(tabId)

    }
    return (
        <>
            <div className="h-[192px]">
                <img src={"https://cdn.pentas.io/next-s3-uploads/8cc9b93e-f75a-48c1-b3c0-d86a27761b92/batik.jpg"} alt="Use Logo" height={192} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow -mt-20 container max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-12">
                    <div className="lg:col-span-1">
                        <div className="col-span-1 flex flex-col text-center">
                            <div className="flex-1 flex flex-col">
                                <img src={"https://cdn.pentas.io/next-s3-uploads/7fd46e40-7f99-4501-ac63-4c3cc378a7bb/D80F2BE7-AE8A-49E8-91C7-57F56C1A4532.jpeg"} alt="" className="w-40 h-40 object-cover flex-shrink-0 mx-auto border-grayBg dark:border-darkBg1 border-8 rounded-full overflow-hidden bg-gray-100 dark:bg-darkBg1" />
                                <div className="text-textPrimary dark:text-darkTextPrimary">
                                    <h1 className="mt-6 text-3xl font-bold">Arif Rafhan</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 lg:mt-16 lg:col-span-2">
                        <div className="mt-4 mb-4">
                            <p className="text-textPrimary dark:text-darkTextPrimary">Bio:</p>
                            <p className="pt-2 text-secondary dark:text-darkTextSecondary break-words overflow-hidden">"Lines create shapes, contours &amp; depths that lead to stories, emotions &amp; hopes."
                                a.k.a. SUPERDOOFUS</p>
                        </div>
                        <div className="mt-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-textPrimary dark:text-darkTextPrimary flex-shrink-0 block h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            <a className="ml-2 hover:underline w-11/12 text-secondary dark:text-darkTextSecondary" href="" target="_blank">
                                <p className="break-words">http://www.twitter.com/ArifRafhanDraw</p>
                            </a>
                        </div>
                        <div className="mt-2 flex items-center">
                            <svg viewBox="0 0 24 24" className="fill-current text-textPrimary dark:text-darkTextPrimary block h-5 w-5"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></svg>
                            <a className="ml-2 hover:underline text-secondary dark:text-darkTextSecondary" href="" target="_blank">@ArifRafhanDraw</a>
                        </div>
                        <div className="sm:inline-flex bg-white dark:bg-darkBg2 border border-white dark:border-darkBg3 shadow rounded-xl mt-6 divide-y dark:divide-darkBg3 sm:divide-y-0 sm:divide-x">
                            <div className="overflow-hidden py-2 px-3">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-textSecondary dark:text-darkTextSecondary" aria-hidden="true"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                    <div>
                                        <dt>
                                            <p className="ml-2 text-xs text-textSecondary dark:text-darkTextSecondary truncate">Volume</p>
                                        </dt>
                                        <dd className="ml-2 flex items-baseline">
                                            <p className="text-sm font-bold text-textSecondary dark:text-darkTextSecondary">25.04</p>
                                            <p className="ml-1 flex text-xs font-bold text-textSecondary dark:text-darkTextSecondary">BNB</p>
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden py-2 px-3">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-textSecondary dark:text-darkTextSecondary" aria-hidden="true"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path></svg>
                                    <div>
                                        <dt>
                                            <p className="ml-2 text-xs text-textSecondary dark:text-darkTextSecondary truncate">Floor Price</p>
                                        </dt>
                                        <dd className="ml-2 flex items-baseline">
                                            <p className="text-sm font-bold text-textSecondary dark:text-darkTextSecondary">0.05</p>
                                            <p className="ml-1 flex text-xs font-bold text-textSecondary dark:text-darkTextSecondary">BNB</p>
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden py-2 px-3">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-textSecondary dark:text-darkTextSecondary" aria-hidden="true">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                    </svg>
                                    <div>
                                        <dt>
                                            <p className="ml-2 text-xs text-textSecondary dark:text-darkTextSecondary truncate">Sold</p>
                                        </dt>
                                        <dd className="ml-2 flex items-baseline">
                                            <p className="text-sm font-bold text-textSecondary dark:text-darkTextSecondary">269</p>
                                            <p className="ml-1 flex text-textSecondary dark:text-darkTextSecondary text-xs">of</p>
                                            <p className="ml-1 text-sm font-bold text-textSecondary dark:text-darkTextSecondary">302</p>
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden py-2 px-3"><div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-textSecondary dark:text-darkTextSecondary" aria-hidden="true"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                </svg>
                                <div>
                                    <dt>
                                        <p className="ml-2 text-xs text-textSecondary dark:text-darkTextSecondary truncate">Owners</p>
                                    </dt>
                                    <dd className="ml-2 flex items-baseline">
                                        <p className="text-sm font-bold text-textSecondary dark:text-darkTextSecondary">168</p>
                                        <p className="ml-1 flex text-xs font-bold text-textSecondary dark:text-darkTextSecondary">Address</p>
                                    </dd>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-b dark:border-darkBg3">
                    <nav className="flex" aria-label="Tabs">
                        {tabs?.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <a onClick={() => handleTabChange(data.id)} className="border-transparent hover:border w-1/3 py-4 px-1 text-center border-b-2 text-sm text-secondary dark:text-darkTextSecondary cursor-pointer" aria-current="page">
                                        {data?.title}
                                    </a>
                                </React.Fragment>
                            )
                        })}
                    </nav>
                </div>
                {tab === "0" &&
                    <>
                        <h1>Hello 0</h1>
                    </>
                }
                {tab === "1" &&
                    <>
                        <h1>Hello 1</h1>
                    </>
                }
                {tab === "2" &&
                    <>
                        <h1>Hello 2</h1>
                    </>
                }
                {tab === "3" &&
                    <>
                        <h1>Hello 3</h1>
                    </>
                }
            </div>
        </>
    )
}
export default UserProfile
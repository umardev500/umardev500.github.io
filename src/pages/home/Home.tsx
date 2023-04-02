import React from 'react'

export const Home: React.FC = () => {
    return (
        <div className="container m-auto">
            <div className="grid grid-cols-8">
                <div className="col-span-2"></div>
                <div className="col-span-4">
                    <div className="mt-60 flex items-center justify-center">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="roboto font-semibold text-6xl text-gray-600">Umar</div>
                            <div className="roboto text-gray-400">Software Engineer | Tech Enthusiast</div>
                            <div className="text-center text-gray-500 font-medium text-lg">Hi there I am Umar, currenty I'm helping other to be succeed.</div>

                            <div className="flex gap-2 mt-8">
                                <button className="roboto font-medium outline-none bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-full text-white">Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

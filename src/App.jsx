import React from 'react'
import popularDestinations from './data/popularDestinations'
import DestinationCard from './components/DestinationCard'
import Logo from './components/Logo'

export default function App() {
    return (
        <div>
            <div className="grid lg:grid-cols-2 bg-white 2xl:grid-cols-5">
                <div className="px-4 py-4 lg:px-12 lg:py-20 max-w-md lg:max-w-full mx-auto sm:max-w-xl xl:mr-0 2xl:col-span-2">
                    <div className="xl:max-w-xl">
                        <Logo className={'h-9'} />
                        <img className="mt-3 sm:mt-4 sm:h-96 sm:w-full sm:object-cover object-top rounded-sm shadow lg:hidden" src="img/bull.jpg" alt="Bull watching bear." />
                        <h1 className="mt-3 sm:mt-4 font-headline text-2xl sm:text-3xl text-gray-800 font-bold lg:text-2xl xl:text-4xl">
                            You can track your way. <br />
                            <span className="text-brand">
                                Keep your decisions accountable.
                            </span>
                        </h1>
                        <p className="mt-2 sm:mt-3 sm:text-lg  text-gray-700 ">
                            Accountable help you prioritize business goals and measure progress towards success.
                        </p>
                        <div className="mt-5 sm:mt-6 space-x-2">
                            <a className="btn btn-primary px-10 shadow hover:-translate-y-0.5 transform transition" href="#">
                                Start Tracking
                            </a>
                            <a className="btn btn-secondary px-10" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative 2xl:col-span-3" >
                    <img className="absolute inset-0 w-full h-full object-cover object-top" src="img/bull.jpg" alt="Bull watching bear." />
                </div>
            </div>
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
                <h2 className="text-xl text-gray-900">And when you are done take some time off</h2>
                <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {popularDestinations.map((destination) => (
                        <DestinationCard destination={destination} key={destination.city} />
                    ))}
                </div>
            </div>
        </div>
    )   
}
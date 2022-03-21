import React, { Component } from 'react'
import Header from '../components/MainHeader/Header';
const SingleCourse = () => {

    return (
        <div>
            {/* <Header /> */}

            <div className="bg-white">
                <div className="pt-6">

                    {/* <!-- Image gallery --> */}
                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                        </div>
                    </div>

                    {/* <!-- Product info --> */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Course Title</h1>
                        </div>

                        {/* <!-- Options --> */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">$192</p>

                            <form className="mt-10">
                                <button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
                            </form>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            {/* <!-- Description and details --> */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;.
                                        Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Tranner</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        <li className="text-gray-400"><span className="text-gray-600">Abd Alkader</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCourse;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
                <img
                    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    className="mb-4"
                    alt="Blog img-1"
                />
                <div className="p-2">
                    <h1 className="text-gray-400 text-sm">UI &amp; UX Design</h1>

                    <h1 className="mb-2">
                        <Link
                            to="SingleCourse"
                            className="text-xl hover:text-red-500"
                        >
                            Doing a cross country road trip
                        </Link>
                    </h1>

                    <p className="text-gray-400 text-sm">
                        We packed her seven versalia, put her initial into the belt
                        and made herself on the way..
                    </p>

                    <div className="mt-4">

                        <Link to="SingleCourse" className="text-red-500">
                            Read More <i className="mdi mdi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
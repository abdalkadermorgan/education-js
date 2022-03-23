import React, { Component } from "react";
import Header from "../components/MainHeader/Header";
import AvilableCourse from "../components/courses/AvailableCourse";
const Courses = () => {
	return (
		<div>
			{/* <Header /> */}

			<section className="pt-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-center">
						<div className="lg:w-2/3 space-y-5 text-center">
							<h1 className="text-2xl text-gray-800 uppercase tracking-widest">
								Courses
							</h1>
							<div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
						</div>
					</div>
					<div className="pt-8">
						<form action="#" method="POST">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<input
										type="text"
										placeholder="Search"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="mt-1 h-10 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
									/>
								</div>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
						<AvilableCourse />
					</div>

					{/* <!-- This example requires Tailwind CSS v2.0+ --> */}
					<div className="bg-white px-4 py-9 flex items-center justify-between border-t border-gray-200 sm:px-6">
						<div className="flex-1 flex justify-between sm:hidden">
							<a
								href="#"
								className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								{" "}
								Previous{" "}
							</a>
							<a
								href="#"
								className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								{" "}
								Next{" "}
							</a>
						</div>
						<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
							<div>
								<nav
									className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
									aria-label="Pagination"
								>
									<a
										href="#"
										className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
									>
										<span className="sr-only">Previous</span>
										{/* <!-- Heroicon name: solid/chevron-left --> */}
										<svg
											className="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
									{/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
									<a
										href="#"
										aria-current="page"
										className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
									>
										{" "}
										1{" "}
									</a>
									<a
										href="#"
										className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
									>
										{" "}
										2{" "}
									</a>
									<a
										href="#"
										className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
									>
										{" "}
										3{" "}
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
									>
										<span className="sr-only">Next</span>
										{/* <!-- Heroicon name: solid/chevron-right --> */}
										<svg
											className="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Courses;

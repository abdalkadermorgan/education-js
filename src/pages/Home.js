import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AvilableCourse from "../components/courses/AvailableCourse";
import CourseItem from "../components/courses/CourseItem/CourseItem";
import AuthContext from "../store/auth-context";

const HomePage = (props) => {
  const authCtx = useContext(AuthContext);

  const { sliders, courses, infographics } = useSelector((state) => state);
  const dispatch = useDispatch();
  //   dispatch(Actions.setSliders([]));
  //   console.log({ state });

  //   const {
  //     state: {
  //      sliders
  //     },
  //     dispatch,
  //   } = useContext(Store);

  //   dispatch({
  //     type: UPDATE_QTY,
  //     item: {
  //       _id: item._id,
  //       item: item,
  //       qty: item.qty + 1,
  //     },
  //   });

  return (
    <div>
      {/* <Header /> */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={`slider-homne-${index}`}>
            <img
              className="w-full  h-[80vh] object-cover"
              src={slide.url}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
            <CourseItem />
          </div>
        </div>
      </section>

      <section className="pt-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {infographics.map((infog, index) =>
            <div className="flex flex-wrap justify-between pt-8 pb-16" key={`infographic-homne-${index}`} >
              <div className="flex w-1/2 lg:w-auto py-4">
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6" key={`info-home-${index}`}>
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    <span>{infog.course}</span>
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Courses Number
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 lg:w-auto py-4">
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    <span>{infog.student}</span>
                  </span>
                  <span className="sm:text-2xl font-bold font-heading"> k </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Student Number
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pt-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="relative py-20 px-4 lg:p-20">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading ">
                <span>Subscribe now to</span>
                <span className="text-blue-500"> Our Newsletter </span>
                <span>and get the Coupon code.</span>
              </h2>
              <p className="mb-8 text-blueGray-400">
                All your information is completely confidential
              </p>
              <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto">
                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded ">
                  <svg
                    className="h-6 w-6 my-auto text-blueGray-500 "
                    xmlns="http://www.w3.org/2000/svg "
                    viewBox="0 0 20 20 "
                    fill="currentColor "
                  >
                    <path
                      d="M2.003
                        5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z "
                    ></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z "></path>
                  </svg>
                  <input
                    className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none "
                    type="text "
                    placeholder="Type your e-mail "
                  />
                </div>
                <button
                  className="w-full md:w-auto py-4 px-8 text-xs text-white
                        font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded "
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BannerSlider = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: "url('https://i.ibb.co/GfGXr66w/Tubex-Grow-Together-2.png')",
            }}
          >
            <div className=" bg-opacity-40 w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-5xl font-bold">Grow Together</h2>
              <button className="mt-10 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium">
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: "url('https://i.ibb.co/9B611zx/urban-gardening-garden-gate-1024x512.jpg')",
            }}
          >
            <div className=" bg-opacity-40 w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-5xl font-bold">Urban Gardening Made Simple</h2>
              <button className="mt-10 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium">
                Explore Tips
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: "url('https://i.ibb.co/mFPjGW1b/your-journey-starts-here-your-journey-starts-here-wooden-sign-grass-blur-background-114436530.webp')",
            }}
          >
            <div className=" bg-opacity-40 w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-5xl font-bold">Your Green Journey Starts Here</h2>
              <button className="mt-10 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;

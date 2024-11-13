import { Tooltip } from 'flowbite-react';
import { moodOptions } from '../static/moodOptions';

interface SlideProps {
  slide: Slide;
  currentSlide: number;
  slideIndex: number
  onSelection: (option: string, slideId: number) => void;
}

const Slide = ({ slide, currentSlide, slideIndex, onSelection }: SlideProps) =>
  <div
    key={slide.id}
    className={`transition-all duration-500 ease-in-out h-screen w-screen absolute inset-0 text-white ${getSlidePoistion(
      slideIndex,
      currentSlide,
    )}`}>
    <div className='grid grid-cols-2 gap-4 h-screen'>
      <div className='bg-blue-800 flex gap-20 p-20 items-center'>
        <h1 className='text-white font-bold text-5xl w-60 leading-[60px]'>
          {slide.question}
        </h1>
      </div>
      <div className='flex justify-evenly items-center text-5xl'>
        {moodOptions.map(mood => (
          <Tooltip
            key={mood.label}
            content={mood.label}>
            <button
              onClick={() => onSelection(mood.value, slide.id)}
              className='outline-none'>
              {mood.value}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  </div>

export default Slide;

const getSlidePoistion = (slideIndex: number, current: number) => {
  if (slideIndex < current) return '-top-[100%]';
  else if (slideIndex > current) return 'top-[100%]';
  return 'top-0';
};

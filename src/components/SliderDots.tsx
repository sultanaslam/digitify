interface SliderDotsProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentScreen: (slide: number) => void;
}

const SliderDots = ({
  slides,
  currentSlide,
  setCurrentScreen
}: SliderDotsProps) => (
  <div className='top-1/2 left-10 translate-y-[-50%] z-10  fixed flex flex-col gap-4 '>
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        onClick={() => setCurrentScreen(index)}
        className={`size-4 cursor-pointer border border-white rounded-full ${currentSlide === index && 'bg-white'
          }`}
      />
    ))}
  </div>
);

export default SliderDots;

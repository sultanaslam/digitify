import { useState } from 'react';
import SliderDots from './components/SliderDots';
import { useSlidesStore } from './hooks/useSlidesStore';
import Slide from './components/Slide';
import { usePostAnswers } from './hooks/usePostAnswers';
import FinalScreen from './components/FinalScreen';
const App = () => {
  const [current, setCurrent] = useState(0);
  const { slides, setSlides } = useSlidesStore();
  const { post } = usePostAnswers();
  const selectionHandle = (answer: string, id: number) => {
    const updatedSlides = slides.map(slide => {
      if (slide.id === id) return { ...slide, answer };
      return slide;
    });
    setSlides(updatedSlides);
    setCurrent(current + 1);
    if (current === slides.length - 1) post(slides);
  };

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {current !== slides.length && (
        <SliderDots
          slides={slides}
          currentSlide={current}
          setCurrentScreen={setCurrent}
        />
      )}
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          slideIndex={index}
          currentSlide={current}
          slide={slide}
          onSelection={selectionHandle}
        />
      ))}
      <FinalScreen isLast={current === slides.length} />
    </div>
  );
};

export default App;

import { useSlidesStore } from '../hooks/useSlidesStore';

const FinalScreen = ({ isLast }: { isLast: boolean }) => {
  const { slides } = useSlidesStore();
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out text-white h-screen w-screen bg-pink-800
    ${isLast ? 'left-0' : 'left-[100%]'}`}>
      {slides.map(slide => (
        <div key={slide.id} className='p-4'>
          <p className='text-2xl font-semibold'>{slide.question}</p>
          <p className='text-4xl'>{slide.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FinalScreen;

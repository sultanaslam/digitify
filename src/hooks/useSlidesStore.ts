import { create } from 'zustand';

type SlidesStore = {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
};

export const useSlidesStore = create<SlidesStore>(set => ({
  slides: [
    { id: 1, question: 'How was your week overall?', answer: null },
    { id: 2, question: 'How was the food?', answer: null },
    { id: 3, question: 'How was the weather?', answer: null },
    { id: 4, question: 'How was your family?', answer: null },
    { id: 5, question: 'How was your friends?', answer: null }
  ],
  setSlides: (slides: Slide[]) => set({ slides })
}));

// import { add, subDays } from 'date-fns';
//
// import _mock from '../_mock';
import { randomInArray } from '../utils';
// ----------------------------------------------------------------------

export const _questions = [
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 1,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: 'B',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 2,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: '',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 3,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: '',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 4,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: '',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 5,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: '',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
  {
    description: `f(x)=x3+9x2-4 funksiyaning 
    o'sish oralig'ini ko'rsating.`,
    id: 6,
    answer: randomInArray(['A', 'B', 'C', 'D']),
    status: randomInArray(['easy', 'normal', 'hard',]),
    modified: false,
    selected: '',
    subject: randomInArray(['Math', 'Physics']),
    options: {
      A: `x<-6; x>0`,
      B: `x<6`,
      C: `X>0`,
      D: `-6<x<0`,
    },
  },
]

// export const _questions = [...Array(24)].map((_, index) => ({
//   id: _mock.id(index),
//   status: randomInArray(['easy', 'normal', 'hard',]),
//   questions: {
//     id: _mock.id(index),
//     question: _mock.questions(index),
//   },
 
// }));

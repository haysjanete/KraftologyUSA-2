import {Item} from './app/shared/models/items';

export const sample_items: Item[] = [
  {
    id: '1',
    name: 'Rhinestone Tumbler',
    price: 50,
    workTime: '2 Weeks',
    favorite: false,
    origins: ['rhinestones', 'pastel'],
    imageUrl: 'assets/pastelslim3.JPEG',
    tags: ['rhinestone', 'pastel', 'cow print'],
  },
  {
    id: '2',
    name: 'Pink Tumbler',
    price: 55,
    workTime: '2 Weeks',
    favorite: false,
    origins: ['pink', 'custom'],
    imageUrl: 'assets/pink3.JPEG',
    tags: ['pink', 'custom', 'glitter'],
  },
  {
    id: '3',
    name: 'Bad Bunny Tumbler',
    price: 60,
    workTime: '3 Weeks',
    favorite: false,
    origins: ['pink', 'custom'],
    imageUrl: 'assets/bb2.PNG',
    tags: ['pink', 'custom', 'uv reactive'],
  }
]

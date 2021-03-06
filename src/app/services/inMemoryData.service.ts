import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      { id: 11, title: 'Junie Bee', body: 'This is content', img: 'http://maven46.com/wp-content/uploads/2017/09/books-750x300.png', starRating: 1, type: 'fiction' },
      { id: 12, title: 'Lord of the Rings', body: 'This is content', img: 'http://www.cinepunx.com/wp-content/uploads/2017/08/paperbacks-header-750x300.jpg', starRating: 2, type: 'non-fiction' },
      { id: 13, title: 'Harry Potter', body: 'This is content', img: 'http://maven46.com/wp-content/uploads/2017/11/new-releases-books-november-maven46-fashion-magazine-banner-750x300.png', starRating: 5, type: 'fiction' },
    ];
    return {blogs};
  }
}

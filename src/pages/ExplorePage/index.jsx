import React from "react";

import './styles.scss';
import { Input } from "antd";

const { Search } = Input;

const ExplorePage = () => {
  const dummy = [
    {
      id: 5,
      title: 'Harry Potter',
      author: 'J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 5,
      title: 'Harry Potter',
      author: 'J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: ' J.K Rowling',
      published_year: 2003,
      genre: 'fantasy, young adult',
      image: 'https://picsum.photos/250/370'
    },
  ];

  return (
    <div className="explore-page">
      <div className="explore-books">
        <div className="title">Explore Books</div>
        <div className="search-field">
          <Search placeholder="Title or author" enterButton />
        </div>
      </div>

      <div className="list-books">
        {
          dummy.map((item, key) => (
            <div className="card-books" key={key}>
              <div className="image">
                <img src={item.image} alt={`cover books ${item.title} ${item.author} ${item.published_year}`} />
              </div>

              <div className="text">
                <div className="publish">{item.published_year}</div>
                <div className="title">{item.title}</div>
                <div className="author">{item.author}</div>
                <div className="genre">{item.genre}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default ExplorePage;
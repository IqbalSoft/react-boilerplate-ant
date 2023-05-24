import React from "react";

import './styles.scss';
import { Button, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";

const HomePage = () => {
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
    }
  ];

  return (
    <div className="home-page">
      <div className="search-section">
        <div className="title">Search. Pick. Read</div>
        <div className="description">Feed your imagination</div>

        <div className="search-field">
          <Input type="text" placeholder="Title or author" bordered={false} />
        </div>
      </div>

      <div className="featured-section">
        <div className="header-section">
          <div className="title">Featured Books</div>
          <Button type="link">See more <RightOutlined /></Button>
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
    </div>
  );
};

export default HomePage;
// App.js
import React from 'react';
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList.js';
import blogData from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About image={blogData.about.image} about={blogData.about.text} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

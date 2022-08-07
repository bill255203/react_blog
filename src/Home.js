import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs'></BlogList>}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'wasabi')}
          title='Wasabis Blogs'
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'mario')}
          title='Marios Blogs'
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'yoshi')}
          title='Yoshis Blogs'
        />
      )}
    </div>
  );
};

export default Home;

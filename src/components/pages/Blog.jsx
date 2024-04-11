import React, { useState } from 'react';
import "../../style/blog.css"; // Adjust the path as needed
import blogData from "./BlogData";

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter blog posts by title
  const filteredBlogData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className='button-70'>Search</button>
      </div>

      {/* Display filtered blog posts */}
      <div className="blog-container">
        {filteredBlogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <img src={blog.imageUrl} alt={blog.title} />
            <p>{blog.content}</p>
            <p>By {blog.author} | {blog.date}</p>
            <a href={blog.readMoreUrl} className="button-4" role="button">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = ({ user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('art');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      content,
      category,
      username: user.username,
    };

    const response = await fetch('/api/posts/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      history.push('/home');
    }
  };

  return (
    <div className="write">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Quill theme="snow" value={content} onChange={setContent} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="art">Art</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="music">Music</option>
        </select>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;

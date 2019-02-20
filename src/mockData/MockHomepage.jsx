import React from 'react';
import { Link } from 'react-router-dom';

const selectedArticleId = '65719288-0395-445e-b587-2b98b70bdec9';

export default function Homepage() {
  return (
    <Link to={`article/${selectedArticleId}`}>
      <div>
        <button type="button">Read this article</button>
      </div>
    </Link>
  );
}

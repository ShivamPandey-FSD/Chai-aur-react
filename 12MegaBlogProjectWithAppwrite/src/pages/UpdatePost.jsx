import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import postService from '../appwrite/post_service';
import { useNavigate, useParams } from 'react-router-dom';

function UpdatePost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default UpdatePost;

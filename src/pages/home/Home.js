import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from './components/Contents/CardMain';

import { useInView } from 'react-intersection-observer';
import FakeApi from 'Apis/fakeApi';

function Home() {
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(1);
  const [ref, inView] = useInView();

  // 서버에서 get
  const getPosts = useCallback(async () => {
    try {
      const res = await FakeApi.getPosts();
      setPosts((prevPosts) => [...prevPosts, ...res]);
      setHasNextPage(res.length === 10);
      if (res.length) {
        page.current += 1;
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      getPosts();
    }
  }, [getPosts, hasNextPage, inView]);

  return (
    <div>
      {posts.map((post, idx) => (
        <Card post={post} ref={ref} />
      ))}
      <div ref={ref} style={{ height: '1px' }}></div>
    </div>
  );
}
export default Home;

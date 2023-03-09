import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from './components/Contents/CardMain';

import { useInView } from 'react-intersection-observer';
import FakeApi from 'Apis/fakeApi';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_POST, GET_POSTS } from 'Stores/post';

function Home() {
  const posts = useSelector((store) => store.post);
  const dispatch = useDispatch();

  console.log(posts);

  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(1);
  const [ref, inView] = useInView();

  // 서버에서 get
  const getPosts = useCallback(async () => {
    try {
      const res = await FakeApi.getPosts();
      dispatch(GET_POSTS({ res }));
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

import { MockPost } from '__mocks__/post';

const posts = MockPost(10);

const FakeApi = {
  getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts);
      }, 300);
    });
  },
};

export default FakeApi;

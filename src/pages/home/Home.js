import Card from './components/Contents/CardMain';

function Home({posts}) {
  return (
    <div>
      {posts.map((post) => {
        return <Card post={post} />;
      })}
    </div>
  );
}
export default Home;

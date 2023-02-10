import Card from './components/Card/CardMain';

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

import withDataFetch from "../hoc/withDataFetch";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const PostComponent = ({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'darkred' }}>Error: {error.message}</p>;

  return (
    <ol style={{ textAlign: 'left' }}>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
};

export default PostComponent;
export const PostComponentWithData = withDataFetch(PostComponent, fetchPosts);

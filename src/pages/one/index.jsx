import { useQuery } from "react-query";
import { get_post } from "queries/posts";

export default function One() {
  const { isLoading, isError, data, error } = useQuery("post", get_post);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <p>One</p>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

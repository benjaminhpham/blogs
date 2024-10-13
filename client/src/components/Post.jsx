import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { title, content } = post;

  return (
    <article>
      <div className="article__body">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="article__footer">
        <Link to={`/edit/${post.id}`}>Edit</Link>
      </div>
    </article>
  );
}

import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { id, title, content } = post;

  return (
    <article>
      <div className="article__body">
        <h3>
          <Link to={`/edit/${id}`}>{title}</Link>
        </h3>
        <p>{content}</p>
      </div>
      <div className="article__footer">
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
    </article>
  );
}

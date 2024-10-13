export default function Post({ post }) {
  const { title, content } = post;
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
}

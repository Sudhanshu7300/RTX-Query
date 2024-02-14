export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <h4 style={{ marginTop: "20px" }}> {post.title}</h4>
      <p style={{ marginTop: "15px" }}> {post.body}</p>
    </>
  );
}

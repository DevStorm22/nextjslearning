export default async function ProductId({ params }) {
  const { productId, blogId } = await params;
  return (
    <>
      <h1>Product id: {productId}</h1>
      <h1>Blog id: {blogId}</h1>
    </>
  );
}

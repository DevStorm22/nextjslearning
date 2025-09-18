export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: String; blogId: String }>;
}) {
  const productid = (await params).productId;
  const blogid = (await params).blogId;
  return (
    <>
      <h1>Product id: {productid}</h1>
      <h1>Blog id: {blogid}</h1>
    </>
  );
}

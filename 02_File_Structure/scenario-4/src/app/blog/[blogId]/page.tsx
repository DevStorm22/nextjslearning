export default async function BlogId(
    {
        params,
    } : {
        params: Promise<{blogId}>
    }
)
{
    const blogID = (await params).blogId;
    return (
        <h1>Blg No. {blogID}</h1>
    );
}
export default async function Blogs(
    {
        params,
    }: {
        params: Promise<{blogNo}>;
    }
)
{
    const blogNo = (await params).blogNo;
    return (
        <h1>Blog No.: {blogNo}</h1>
    );
}
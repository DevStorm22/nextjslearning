export default async function Blogs(
    {
        params,
    }: {
        params: { slug: string[] };
    }
)
{
    const { slug } = params;
    if (slug?.length === 1)
    {
        return (
            <h1>Viewing docs for feature {slug[1]}</h1>
        )
    }
    else if (slug?.length === 2)
    {
        return (
            <h1>Viewing docs for feature {slug[1]} and concept {slug[2]}</h1>
        )
    }
    return (<h1>Docs Home Page</h1>);
}
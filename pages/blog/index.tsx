interface BlogProps {
    data: Array<any>;
}

export default function Blog(props: BlogProps) {
    const { data } = props;
    console.log(data)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', padding: 10 }}>
            {data.filter((_, index) => index > 10 && index < 20).map((v, index) => (
                <div key={index} style={{ padding: 15, backgroundColor: 'pink', color: '#000', cursor: 'pointer' }}>{v.name}</div>
            ))}
        </div>
    )
}
/**
 * @getServerSideProps
 * cocok untuk API yang datanya bersifat dinamis
 * 
 * @returns Javascript
 */
export async function getServerSideProps() {
    const response = await fetch('http://universities.hipolabs.com/search?country=Indonesia')
    const result = await response.json()

    return {
        props: {
            data: result,
        }
    }
}
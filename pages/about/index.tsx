import { GetServerSideProps } from "next"
import { useRouter } from "next/router";

type Data = {
    data: object
}

interface AboutProps {
    apiList: Array<any>;
    fallback: boolean;
}

export default function About(props: AboutProps) {
    const { apiList } = props
    const router = useRouter()
    console.log(apiList)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', padding: 10 }}>
            {apiList.filter((_, index) => index < 10).map((v, index) => (
                <div onClick={() => router.push(`/about/${v.name}`)} key={index} style={{ padding: 15, backgroundColor: 'green', color: '#fff', cursor: 'pointer' }}>{v.name}</div>
            ))}
        </div>
    )
}

/**
 * getStaticProps only used when the data isn't dynamic. When the app
 * is on build, nextjs will first prepare this data, so it's ready before 
 * we serve the content
 */
export async function getStaticProps() {
    const response = await fetch('http://universities.hipolabs.com/search?country=Indonesia')
    const result = await response.json()

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        props: {
            apiList: result,
            fallback: false
        }
    }
}


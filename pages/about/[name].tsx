import { useRouter } from 'next/router'

interface detailUniv {
  domains: object;
  alpha_two_code: string;
  web_pages: object;
  country: string;
  name: string;
}
interface AboutProductProps {
  dataUniv: detailUniv;
}

export default function AboutProduct(props: AboutProductProps) {
  const router = useRouter()
  const { name } = router.query
  const { dataUniv } = props

  return (
    <div>
      About Product <b>{name}</b>
      <br />
      <br />
      <p>{JSON.stringify(dataUniv)}</p>
    </div>
  )
}

/**
 * @getStaticPaths @getStaticProps
 * generate halaman sesuai yang diperlukan saat build
 *  - - - - - - -
 */

export async function getStaticPaths() {
    const res = await fetch('http://universities.hipolabs.com/search?country=Indonesia');
    const listUniv = await res.json();

    const paths = listUniv.map((v: detailUniv) => ({
        params: {
            name: v.name
        }
    }))

    return {
      paths,
      // fallback true akan selalu menunggu render sampai selesai jika 
      // ada url yang tidak ditemukan, sebaliknya jika false akan di 
      // redirect ke page 404
      fallback: false
    }
}

interface staticPropsParams {
  name: string
}

interface GetStaticProps {
  params: staticPropsParams
}

export async function getStaticProps(context: GetStaticProps) {
  const { name } = context.params;
  const res = await fetch('http://universities.hipolabs.com/search?country=Indonesia');
  const result = await res.json()
  const dataUniv = result.filter((v: staticPropsParams) => v.name === name)

  return {
    props: {
      dataUniv: dataUniv
    }
  }
}
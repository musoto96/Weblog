import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Inicio</title>
      </Head>
      <h1>Índice</h1>
      {posts.map((post) => {
        const faceLink = post.replace('.html', '');
        const faceTitle = post.replace('.html', '').replace('-', ' ');
        return (
          <div key={post}>
            <Link href={faceLink}>
              <a>
                {faceTitle}
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return ({
    props: {
      posts: files
    }
  })
}

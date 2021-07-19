import fs from 'fs'
import path from 'path'

export default function Post({content}) {
   return (
      <div>
         <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
   )
}

export const getStaticPaths = async() => {
   const files = fs.readdirSync('posts');
   const paths = files.map(function(filename) {
      return {
         params: {
            post: filename.replace('.html', '')
         }
      }
   });

   return {
      paths,
      fallback: false
   }
}

export const getStaticProps = async({params: {post}}) => {
   const content = fs.readFileSync(path.join('posts', post + '.html')).toString();

   return {
      props: {
         content
      }
   }
}

import layoutStyle from '../styles/Layout.module.css'

export default function Layout({ children }) {
   return (
      <div>
         <head>
            <meta name="description" content="Weblog de informática e IT" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
         </head>
         <div className={layoutStyle.layout}>
            {children}
         </div>
      </div>
   )
}

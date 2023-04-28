import { Route, Routes, useParams } from 'react-router-dom'
import './Post.css'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaPadrao from 'componentes/PaginaPadrao'

export default function Post () {
    const parametros = useParams ()
    const post = posts.find((post) => {
        return post.id === Number(parametros.id) // Pega o id Json que ta em string e passa para inteiro
    })

    if (!post){
        return <NaoEncontrada/>
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                 <Route index element={
                    <PostModelo 
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                    >
                    <div className='post-markdown-container'>
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                    </PostModelo>
                 }/>
            </Route>
        </Routes>
    )
}
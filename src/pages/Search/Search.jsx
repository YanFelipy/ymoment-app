import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import styles from './Search.module.css'

import PostDetails from '../../components/postDetails'
import { Link } from 'react-router-dom'

const Search = () => {

  const query = useQuery()
  const search = query.get("q")

  const { documents: posts } = useFetchDocuments("posts", search)

  return (
    <div className={styles.container_post}>
      <div className={styles.content_post}>
        {posts && posts.length === 0 ? (
          <div className={styles.search_no_results}>
            <h2>
              Não encontramos nenhuma postagem com a tag: <span>#{search}</span> :(                   </h2>
            <p>Utilize outras tags para encontrar os melhores momentos, ou
              <Link to="/"> clique aqui para voltar para a página inicial.
              </Link>
            </p>

          </div>
        ) : (<div className={styles.search_results_ok}><p>Resultados encontrados com a tag: <span>#{search}</span></p>
        </div>)}

        {posts && posts.map(post => (<PostDetails className={styles.post_details} key={post.id} post={post} />
        ))
        }

      </div>
    </div>
  )
}

export default Search
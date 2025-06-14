import {useQuery} from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import styles from'./Search.module.css'

import PostDetails from '../../components/postDetails'

const Search = () => {
  
  const query = useQuery()
  const search = query.get("q")

  const {documents : posts } = useFetchDocuments("posts", search)
console.log(posts)
  
  return (
       <div className={styles.container_post}>
            <div className={styles.content_post}>
              {posts && posts.lenght === '0' && (
                <div>
                  <h1>
                    Não encontramos nenhuma postagem com essa tag :(
                  </h1>
                  <p>Utilize outras tags para encontrar os melhores momentos!</p>
                </div>
              ) }
      
            {posts && posts.map(post => ( <PostDetails className={styles.post_details} key={post.id} post={post} />
))
   }
   
        </div>
        </div>
  )
}

export default Search
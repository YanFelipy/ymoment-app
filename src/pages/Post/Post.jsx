import PostDetails from '../../components/postDetails'
import styles from './Post.module.css'

import { useParams } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocument';




const Post = () => {
  const { documents: posts } = useFetchDocuments("posts")

  let params = useParams()
  const postId = params.postId

  return (

    <div className={styles.container_post}>
      <div className={styles.content_post}>
        {posts && posts.filter(post => post.id == postId).map(post => (
          <PostDetails className={styles.post_details} key={post.id} post={post} link="/" desc={"Retornar a página inicial"} />
        ))
        }

      </div>
    </div>




  )
}

export default Post
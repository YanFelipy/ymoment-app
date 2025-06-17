import styles from './HomeProfile.module.css'
import avatar from '../../assets/avatar.png'

import PostDetails from '../../components/PostDetails.jsx'

import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'


import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { useAuthValue } from '../../../context/AuthContext'


const Home = () => {
    const { user } = useAuthValue()
  const uid = user.uid
    const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  UseChangeTitle("Página Inicial")
  
  return (
    <div className={styles.home_posts}>
      <aside className={styles.box_menu_profile}>
        <div className={styles.userprof_posts}>

             <h4>Informações da conta </h4>
                   
                     <img className={styles.avatar_profile} src={avatar} />
                  <div className={styles.user_info}>
                    <span>
                      {user.uid}
                    </span>
                    <h5>Nome :  {user.displayName} </h5>
            <h5>Email :  {user.email} </h5>
                  </div>
                 </div>
      </aside>
      <main className={styles.box_user_posts}>
        <div className={styles.post}>

{loading && <p className={styles.p_loading}>Carregando posts...</p>}
          {posts && posts.map((post) => (
            <PostDetails  key={post.id} post={post} desc={"Ler mais"} link={`/posts/${post.id}`} />
          ))}
        
        </div>

 
      </main>
    </div>
  )
}

export default Home
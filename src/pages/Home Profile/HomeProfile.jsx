import styles from './HomeProfile.module.css'
import avatar from '../../assets/avatar.png'

import PostDetails from '../../components/postDetails.jsx';
import { Link } from 'react-router-dom';

import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'
import { useDeleteDocument } from '../../hooks/useDeletePost.jsx';
import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { useAuthValue } from '../../../context/AuthContext'


const Home = () => {
  UseChangeTitle("Meus Momentos ")

  const { user } = useAuthValue()
  const uid = user.uid
  const { documents: posts } = useFetchDocuments("posts", null, uid)
  const { deleteDocument } = useDeleteDocument("posts")


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
          {posts && posts.length === 0 ? (
            <div className={styles.search_no_results}>
              <h2>
                Não encontramos nenhum post <span>:(</span>
              </h2>
              <p>
                <Link className={styles.link_home} to="/"> Clique aqui para voltar página inicial e compartilhe os seus momentos conosco!
                </Link>
              </p>

            </div>
          ) : (<div className={styles.search_results_ok}><p>Estes são os seus momentos compartilhados <span>{user.displayName}</span></p>
          </div>)}






          {posts && posts.map((post) => (

            <PostDetails event={() => deleteDocument(post.id)} key={post.id} post={post} />
          ))}

        </div>


      </main>
    </div>
  )
}

export default Home
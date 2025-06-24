//STYLE AND ASSETS
import styles from './Dashboard.module.css'
import avatar from '../../assets/avatar.png'
// import putimgs from '../../assets/put_image.svg'

//COMPONENTS
import PostDetails from '../../components/postDetails'

//HOOKS

import { Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocument';
import PostForm from '../../components/PostForm'


const Dashboard = () => {

  //DEC HOOKS

  const { documents: posts, loading } = useFetchDocuments("posts")

  return (
    <main>
      <div className={styles.pf_container}>

        <div className={styles.box_post}>
          <div className={styles.profile_writer}>
            <div className={styles.userprof_writer}>
              <Link to="/profile_posts">
              <img className={styles.avatar_profile} src={avatar} /></Link>
            </div>
          </div>

          <div className={styles.form_writer}>
            <PostForm />
          </div>
        </div>

        <div className={styles.box_feed}>
          {loading && <p className={styles.p_loading}>Carregando posts...</p>}
          {posts && posts.map((post) => (
            <PostDetails key={post.id} post={post} desc={"Ler mais"} link={`/posts/${post.id}`} />
          ))}
        </div>

      </div>

      <div className={styles.th_container}>

        <div className={styles.box_trending_hashtags}>

          <div className={styles.trendings_title}>
            <h3>
              Top moments (Hashtags) :
            </h3>
          </div>
          <div className={styles.hash_list}>

            <ul className={styles.trending_list}>

              <li>
                <p>#Sol</p>
                <div className={styles.hash_carrousel_imgs}>
                  <ul>
                    <li className={styles.carrousel_img}>
                      <img src="https://img.freepik.com/fotos-premium/lindo-ceu-em-um-dia-ensolarado_180633-347.jpg" />
                    </li>
                    <li className={styles.carrousel_img}>
                      <img src="https://omunicipio.com.br/wp-content/uploads/2020/08/ciro-groh-apos-dia-ensolarado-brusque-tem-entardecer-digno-de-cartao-postal-neste-sabado-capa-1280x720.jpg" />
                    </li>

                  </ul>
                </div>

              </li>

              <li>
                <p>#Tech</p>
                <div className={styles.hash_carrousel_imgs}>
                  <ul>
                    <li className={styles.carrousel_img}>
                      <img src="https://hgwconsult.com.au/wp-content/uploads/2023/10/Tech-Titans-How-Tech-Companies-Fuel-Global-Economic-Growth.jpg" />
                    </li>
                    <li className={styles.carrousel_img}>
                      <img src="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2023/02/computador-positivo-%C3%A9-bom.jpeg" />
                    </li>


                  </ul>
                </div>

              </li>
              <li>
                <p>#Mar</p>
                <div className={styles.hash_carrousel_imgs}>
                  <ul>
                    <li className={styles.carrousel_img}>
                      <img src="https://media.istockphoto.com/id/1366027192/pt/foto/beautiful-caribbean-sea-and-blue-sky-travel-background.jpg?s=612x612&w=0&k=20&c=4Uq-ViVFBWFCZeFiQ07KTAHNKy_Q8GN14WHJFdpHdvg=" />
                    </li>
                    <li className={styles.carrousel_img}>
                      <img src="https://omunicipio.com.br/wp-content/uploads/2020/08/ciro-groh-apos-dia-ensolarado-brusque-tem-entardecer-digno-de-cartao-postal-neste-sabado-capa-1280x720.jpg" />
                    </li>
                    <li className={styles.carrousel_img}>
                      <img src="https://thedaily.case.edu/wp-content/uploads/2023/06/underwater-view.jpg" />
                    </li>
                    <li className={styles.carrousel_img}>
                      <img src="https://news.clemson.edu/wp-content/uploads/2021/06/science-fish-41067725.jpg" />
                    </li>
                  </ul>
                </div>

              </li>


            </ul>

          </div>

        </div>



      </div>


    </main>
  )
}

export default Dashboard
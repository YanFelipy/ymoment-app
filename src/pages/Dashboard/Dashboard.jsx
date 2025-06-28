//STYLE AND ASSETS
import styles from './Dashboard.module.css'
// import avatar from '../../assets/avatar.png'
import putimgs from '../../assets/put_image.svg'

//COMPONENTS
import PostDetails from '../../components/postDetails'
import UserDetails from '../../components/userDetails'

//HOOKS
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthValue } from '../../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useFilterTags} from '../../hooks/useFilterTags'
// import { useQuery } from '../../hooks/useQuery'


const Dashboard = () => {

  //DEC HOOKS
  const { user } = useAuthValue()

  const navigate = useNavigate()
  const { insertDocument, response } = useInsertDocument("posts")
  const { documents: posts, loading } = useFetchDocuments("posts")
  const { findRepeatedValues } = useFilterTags()

  //STATES
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  // MOST USED TAGS : 
  const findTags = posts && posts.map( (post) => {
  let newArray = []

  post.tagsArray.map(((tags) => {
    newArray.push(tags)
     })) 
return newArray
})

let findTagsString = findTags &&  findTags.toString()
let allTags = findTagsString && findTagsString.split(",").map(item =>item.trim() )
const repeated = findRepeatedValues(allTags)

//const xRepeatedValues1 = countTags(allTags,repeated[0]) 
//const xRepeatedValues2 = countTags(allTags,repeated[1]) 
//const xRepeatedValues3 = countTags(allTags,repeated[2]) 





  //SUBMITING SEARCH TAGS
    const handleSearch = (event) =>  {
    let tagQuery = event.target.lastChild.textContent
     
     navigate(`/search?q=${tagQuery}`)
    }

  //SUBMITING POSTS

  const handleSubmitPost = (e) => {
    e.preventDefault()
    setFormError("")




    //ARRAY OF TAGS
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    //CHECK VALUES 
    if (body || tags == "") {
      setFormError("* Por favor, preencha todos os campos")
    }
    //VALIDATE IMAGE

    try {
      new URL(image)
    } catch (error) {
      setFormError("* A imagem precisa ser uma URL ")
      console.log(error)

    }

    if (formError) return

    insertDocument({
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    setBody("")
    setImage("")
    setTags("")   
     setFormError("* A imagem precisa ser uma URL ")

    navigate("/")
  }
console.log(user.imageProfile)

  return (
    <main>
      <div className={styles.pf_container}>

        <div className={styles.box_post}>
          {/* 
          <div className={styles.profile_writer}>
            <div className={styles.userprof_writer}>
              <Link to="/profile_posts" className={styles.perf_link}>
            {user && 
            <div className={styles.perf_rounded}>
              <span>
{user.displayName.charAt(0)}
              </span>
            </div>
            }
              <img className={styles.avatar_profile} src={user.imageProfile} />
              </Link>

            </div>
          </div> {*/}

          <UserDetails user={user}/>

          <div className={styles.form_writer}>

            <form onSubmit={handleSubmitPost} className={styles.post_form}>

              <label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} name="post" maxLength='200' placeholder="Diga ao mundo como se sente hoje..." id="">
                </textarea>
              </label>

              <label >
                <input className={styles.inputs_hash} required value={tags} onChange={(e) => setTags(e.target.value)} name="tags" maxLength='50' placeholder="Insira suas tags separadas por vírgula..." id="">
                </input>
              </label>



              <label className={styles.btn_up_image}>
                <img className={styles.putimg} src={putimgs} />
                <input value={image} onChange={(e) => setImage(e.target.value)} className={styles.Inp_imageurl} type='text' placeholder="Digite a URL da imagem que combine com o seu post!" />

              </label>

              <div className={styles.submit_box_post}>

                <div className={styles.error}>
                  {response.error && <p> {response.error}</p>}
                  {formError && <p> {formError}</p>}
                </div>


                {!response.loading &&
                  <label>
                    <input type='submit' value="Enviar Momento!" />
                  </label>
                }

                {response.loading &&
                  <label>
                    <input disabled type='submit' className={styles.disabled_submit} value="Enviando..." />
                  </label>
                }

              </div>

            </form>

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
{ repeated && repeated.map(((hashtag)=> (
    <li key={hashtag.id} className={styles.li_link_tag}>
      <button key={hashtag} onClick={handleSearch} className={styles.button_tag}>
                                    <p>#{hashtag}</p>
                   
                            </button> 
      
                
                <div className={styles.hash_carrousel_imgs}>

                </div>

              </li>
)))}



{/* 
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
*/}

            </ul>

          </div>

        </div>



      </div>


    </main>
  )
}

export default Dashboard
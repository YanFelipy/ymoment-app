
import avatar from '../../assets/avatar.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './EditPost.module.css'
import { useAuthValue } from '../../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument.jsx'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useEffect, useState } from 'react'


const EditPost = () => {
  //DEC HOOKS
  const { user } = useAuthValue()
  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id)
  const { updateDocument, response } = useUpdateDocument("posts")


  //STATES
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  console.log(user)

  useEffect(() => {

    if (post) {
      setBody(post.body)

      if (post.image) {
        setImage(post.image)
      }

      const textTags = post.tagsArray.join(", ")
      setTags(textTags)

    }

  }, [post])

  const navigate = useNavigate()

  const handleSubmitEditPost = (e) => {
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

    const data = {
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }
    updateDocument(id, data)

    setBody("")
    setImage("")
    setTags("")
    setFormError("")

    navigate("/profile_posts")
  }


  return (
    <main>
      <div className={styles.pf_container}>

        <div className={styles.box_post}>
          <div className={styles.profile_writer}>
            <div className={styles.userprof_writer}>
              <Link to="/profile_posts">
                <img className={styles.avatar_profile} src={avatar} />
              </Link>
            </div>
          </div>

          <div className={styles.form_writer}>

            <form onSubmit={handleSubmitEditPost} className={styles.post_form}>

              <label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} name="post" maxLength='200' placeholder="Diga ao mundo como se sente hoje..." id="">
                </textarea>
              </label>

              <label >
                <input className={styles.inputs_hash} required value={tags} onChange={(e) => setTags(e.target.value)} name="tags" maxLength='50' placeholder="Insira suas tags separadas por vírgula..." id="">
                </input>
              </label>



              <label className={styles.btn_up_image}>
                <div className={styles.box_url}>
                  <svg className={styles.putimg} width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.08"></g><g id="SVGRepo_iconCarrier"> <title>file_url [#1759]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -1279.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M103.7248,1125.0442 L98.2748,1119.3112 C98.0858,1119.1132 97.8238,1119.0002 97.5498,1119.0002 L85.9998,1119.0002 C84.8958,1119.0002 83.9998,1119.8962 83.9998,1121.0002 L83.9998,1128.0002 C83.9998,1128.5522 84.4478,1129.0002 84.9998,1129.0002 C85.5528,1129.0002 85.9998,1128.5522 85.9998,1128.0002 L85.9998,1122.0002 C85.9998,1121.4482 86.4478,1121.0002 86.9998,1121.0002 L95.9998,1121.0002 L95.9998,1125.0002 C95.9998,1126.1052 96.8958,1127.0002 97.9998,1127.0002 L101.9998,1127.0002 L101.9998,1128.0002 C101.9998,1128.5522 102.4478,1129.0002 102.9998,1129.0002 C103.5528,1129.0002 103.9998,1128.5522 103.9998,1128.0002 L103.9998,1125.7332 C103.9998,1125.4772 103.9018,1125.2302 103.7248,1125.0442 M94.9998,1134.0002 C94.9998,1133.4482 94.5528,1133.0002 93.9998,1133.0002 L92.9998,1133.0002 L92.9998,1135.0002 L93.9998,1135.0002 C94.5528,1135.0002 94.9998,1134.5532 94.9998,1134.0002 M95.7248,1136.4492 L96.3558,1137.7122 C96.6518,1138.3042 96.2218,1139.0002 95.5598,1139.0002 L95.5498,1139.0002 C95.2128,1139.0002 94.9048,1138.8102 94.7538,1138.5082 L93.9998,1137.0002 L92.9998,1137.0002 L92.9998,1138.1102 C92.9998,1138.6022 92.6018,1139.0002 92.1098,1139.0002 L91.8898,1139.0002 C91.3988,1139.0002 90.9998,1138.6022 90.9998,1138.1102 L90.9998,1131.8902 C90.9998,1131.3992 91.3988,1131.0002 91.8898,1131.0002 L93.8528,1131.0002 C95.4148,1131.0002 96.8238,1132.1302 96.9838,1133.6842 C97.1018,1134.8262 96.5738,1135.8502 95.7248,1136.4492 M102.9998,1137.0002 L100.4998,1137.0002 C100.2238,1137.0002 99.9998,1136.7762 99.9998,1136.5002 L99.9998,1132.0002 C99.9998,1131.4482 99.5528,1131.0002 98.9998,1131.0002 C98.4478,1131.0002 97.9998,1131.4482 97.9998,1132.0002 L97.9998,1137.0002 L97.9998,1138.0002 C97.9998,1138.5522 98.4478,1139.0002 98.9998,1139.0002 L99.9998,1139.0002 L102.9998,1139.0002 C103.5528,1139.0002 103.9998,1138.5522 103.9998,1138.0002 C103.9998,1137.4482 103.5528,1137.0002 102.9998,1137.0002 M89.9998,1131.8902 L89.9998,1136.0002 C89.9998,1137.7112 88.5688,1139.0872 86.8388,1138.9962 C85.2168,1138.9112 83.9998,1137.4552 83.9998,1135.8302 L83.9998,1131.8902 C83.9998,1131.3992 84.3988,1131.0002 84.8898,1131.0002 L85.1098,1131.0002 C85.6018,1131.0002 85.9998,1131.3992 85.9998,1131.8902 L85.9998,1136.0002 C85.9998,1136.5522 86.4478,1137.0002 86.9998,1137.0002 C87.5528,1137.0002 87.9998,1136.5522 87.9998,1136.0002 L87.9998,1131.8902 C87.9998,1131.3992 88.3988,1131.0002 88.8898,1131.0002 L89.1098,1131.0002 C89.6018,1131.0002 89.9998,1131.3992 89.9998,1131.8902" id="file_url-[#1759]"> </path> </g> </g> </g> </g></svg>
                  <input value={image} onChange={(e) => setImage(e.target.value)} className={styles.Inp_imageurl} type='text' placeholder="Digite a URL da imagem que combine com o seu post!" />

                </div>

                <div className={styles.box_image_body}>
                  {image && <img src={image} />}

                </div>

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



      </div>



    </main>
  )
}

export default EditPost
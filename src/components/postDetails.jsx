import avatar from './../assets/avatar.png'
import styles from './PostDetails.module.css'

import { Link } from 'react-router-dom'

const PostDetails = ({post, link, desc}) => {

  return (
    <div className={styles.user_and_post} key={post.id}>
               <div className={styles.profile_feed}>
                 <div className={styles.userprof_feed}>
                   <a>
                     <img className={styles.avatar_profile} src={avatar} />
                     </a>
                 </div>
               </div>
               <div className={styles.content_post}>
   
                 {/* Fazer o map do nome e post do usuário */}
   
                 <div className={styles.userPost}>
                   <div className={styles.u_time}>
                    <div className={styles.username_and_postdate}>
                     <h3>{post.createdBy}</h3>
                     <span>{new Date(post.createdAt.toDate() ).toLocaleString("pt-BR")  }</span>
                    </div>
                 <div className={styles.content_post_link}>
<Link to={link}> {desc}
                      </Link>
                 </div>
                   </div>
                   <div className={styles.post_body}>
                   <p className={styles.post_string_body}>{post.body} </p>
                   <div className={styles.box_image_body}>
                {post.image &&  <img src={post.image} />}

                   </div>
                    
<div className={styles.post_tags}>
                     { post.tagsArray && post.tagsArray.map((tag) => (
                       <p className={styles.tag} key={tag}><span>#</span>{tag}</p>
                       
                      ))}
     </div>

                   </div>
                
                 </div>
               </div>
   
             </div>
  )
}

export default PostDetails
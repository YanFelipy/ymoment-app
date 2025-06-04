// import styles from '../pages/Dashboard/Dashboard.module.css'
import avatar from './../assets/avatar.png'
import styles from './PostDetails.module.css'

const PostDetails = ({post}) => {

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
                     <h3>{post.createdBy}</h3>
                     <span>{new Date(post.createdAt.seconds *1000 ).toLocaleString("pt-BR")  }</span>
                 
                   </div>
                   <div className={styles.post_body}>
                   <p className={styles.post_string_body}>{post.body} </p>
                {post.image &&  <img src={post.image} />}
                    <br />
<div className={styles.post_tags}>
                     { post.tagsArray && post.tagsArray.map((tag) => (
                       <p key={tag}><span>#</span>{tag}</p>
                                        
                       ))}
     </div>

                   </div>
                
                 </div>
               </div>
   
             </div>
  )
}

export default PostDetails
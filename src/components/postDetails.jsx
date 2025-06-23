import avatar from './../assets/avatar.png'
import styles from './PostDetails.module.css'


import { Link, useNavigate, useLocation } from 'react-router-dom'

const PostDetails = ({post, link, desc, event}) => {
 const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = (event) =>  {
    let tagQuery = event.target.lastChild.textContent
     
     navigate(`/search?q=${tagQuery}`)
    }

  return (
    <div className={styles.user_and_post} key={post.id}>
               <div className={styles.profile_feed}>
                 <div className={styles.userprof_feed}>
                   <Link to="/profile_posts">
                     <img className={styles.avatar_profile} src={avatar} />
                     </Link>
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
             {location.pathname.includes('/profile_posts') &&
                   <button onClick={event} className={styles.delete_post}>
                   <svg  viewBox="-2.4 -2.4 28.80 28.80" fill="none" 
                   xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                      </g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                       strokeLinejoin="round" stroke="#CCCCCC" stroke-width="0.048">
                        </g>
                        <g id="SVGRepo_iconCarrier"> 
                          <path d="M4 6H20M16 6L15.7294 5.18807C15.4671
                           4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021
                            3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 
                            10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729
                             3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 
                             17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 
                             16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 
                             7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 
                             17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ff0000" strokeWidth="1.3679999999999999" strokeLinecap="round" strokLinejoin="round">
                            </path>
                             </g></svg>
                   </button>
             }
                 </div>
                   </div>
                   <div className={styles.post_body}>
                   <p className={styles.post_string_body}>{post.body} </p>
                   <div className={styles.box_image_body}>
                {post.image &&  <img src={post.image} />}

                   </div>
                    
<div className={styles.post_tags}>
                     {post.tagsArray && post.tagsArray.map((tag) => (
                      <button key={tag} onClick={handleSearch} className={styles.button_tag}>
                        <span>#</span>
                        <p className={styles.tag} key={tag}>{tag}</p>
                      </button> 
                       
                      ))}
     </div>

                   </div>
                
                 </div>
               </div>
   
             </div>
  )
}

export default PostDetails
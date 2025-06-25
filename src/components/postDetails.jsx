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
           
                  <div className={styles.post_buttons}>
                                  <button onClick={event} className={styles.delete_post}>
                   <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                   </button>

       
                     <Link  to={`/posts/edit/${post.id}`} className={styles.edit_post}>
                        <svg  viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                         stroke="#000000" stroke-width="0.00024000000000000003">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">                            </g>
                            <g id="SVGRepo_iconCarrier">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 
                              .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211
                               2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0
                                0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0
                                 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 
                                 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318
                                  1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1
                                   1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0
                                    0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z" fill="#000000">
                                    </path>
                                    </g>
                        </svg>
                      </Link>

</div>
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
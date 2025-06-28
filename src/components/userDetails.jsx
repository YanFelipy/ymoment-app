import styles from '../pages/Dashboard/Dashboard.module.css'
import { Link } from 'react-router-dom';

const userDetails = ({user,post}) => {
   
 const randomColor = Math.floor(Math.random()*16777215).toString(16);
 
   document.getElementById("#round") ?(  
    document.getElementById("#round").style.backgroundColor = `#${randomColor}`): ""
 
  return (
    <div className={styles.profile_writer}>
            <div className={styles.userprof_writer}>
              <Link to="/profile_posts" className={styles.perf_link}>
            {            <div style={{backgroundColor: `#${randomColor}`}} className={styles.perf_rounded}>
              <span>
{ post && post ? ( post.charAt(0)) : ""}
{user ? ( user.displayName.charAt(0)) : ""}
              </span>
            </div>
            }
              
              </Link>

            </div>
          </div>
  )
}

export default userDetails
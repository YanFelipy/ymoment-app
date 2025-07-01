
import styles from './UserDetails.module.css'
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const UserDetails = ({ user, post }) => {
  const divRef = useRef(null);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);


  useEffect(() => {
    divRef.current.style.backgroundColor = `#${randomColor}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={styles.profile_writer}>
      <div className={styles.userprof_writer}>
        <Link to="/profile_posts" className={styles.perf_link}>
          {<div ref={divRef} className={styles.perf_rounded}>
            <span>
              {post && post ? (post.charAt(0)) : ""}
              {user ? (user.displayName && user.displayName.charAt(0)) : ""}
            </span>
          </div>
          }

        </Link>

      </div>
    </div>
  )
}

export default UserDetails
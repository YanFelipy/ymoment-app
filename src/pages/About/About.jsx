import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'
import styles from './About.module.css'
import aboutImage from '../../assets/teen-aboutus.png'



const About = () => {
  UseChangeTitle("Sobre o yMoment")
  return (
    <main className={styles.main_about}>
      <div className={styles.container_about}>

        <div className={styles.boxImage_about}>
<img src={aboutImage}  alt="" />
        </div>

<div className={styles.boxText_about}>
<h1> Sobre o yMoment</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis quidem, adipisci ut id, tempora corporis modi asperiores molestiae vitae, sunt minima repudiandae. Commodi pariatur, adipisci exercitationem velit rerum eum?</p>

        </div>
      </div>
      </main>
  )
}

export default About
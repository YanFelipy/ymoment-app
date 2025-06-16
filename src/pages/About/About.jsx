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
<h1><span>Sobre o y</span>Moments</h1>
<p>&nbsp; O "yMoment"ou "Your Moments" é um projeto de blog, onde você pode  se cadastrar,
   fazer postagens, publicar fotos a partir de uma URL e utilizar tags para referenciar suas
    postagens. O projeto tem o objetivo de fixar e colocar em prática os conhecimentos adquiridos de React e Firebase. Neste projeto, também foi utilizado o CSS Modules. O app teve como base o projeto "Mini Blog" do curso em React - Hora de Codar, contudo, repleto de novas implementações (visuais e funcionais).  </p><br/>
<br />



        </div>
      </div>
      </main>
  )
}

export default About
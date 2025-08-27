
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Добро пожаловать в наш Блог!</h1>
      <img src="https://onlypult.com/blog_uploads/9f7f6ead397f623793c262c8ce562c97.png" alt="post" />
      <p>Читайте интересные статьи, делитесь мыслями, создавайте новые посты и оставайтесь с нами.</p>
    </div>
  )
}

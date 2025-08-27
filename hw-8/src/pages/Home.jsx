
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to our Blog!</h1>
      <img src="https://onlypult.com/blog_uploads/9f7f6ead397f623793c262c8ce562c97.png" alt="post" />
      <p>Read interesting articles, share your thoughts, create new posts and stay with us.</p>
    </div>
  )
}

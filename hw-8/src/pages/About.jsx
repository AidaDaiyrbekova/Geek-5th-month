import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.about}>
      <h2>About the project</h2>
      <img src="https://www.shkolazhizni.ru/img/content/i160/160260_or.jpg" alt="post" />
      <p>This is a simple SPA application built in React using React Router Dom.</p>
      <p>You can view posts and add your own.</p>
    </div>
  )
}

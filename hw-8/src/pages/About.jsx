import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.about}>
      <h2>О проекте</h2>
      <img src="https://www.shkolazhizni.ru/img/content/i160/160260_or.jpg" alt="post" />
      <p>Это простое SPA-приложение, созданное на React с использованием React Router Dom.</p>
      <p>Вы можете просматривать посты и добавлять свои собственные.</p>
    </div>
  )
}

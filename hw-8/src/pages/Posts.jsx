import { useState, useEffect } from "react"
import axios from "axios"
import style from './Posts.module.css'


export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    async function Posts() {
      try {
        const res = await axios.get("https://dummyjson.com/posts")
        setPosts(res.data.posts)
      } catch (error) {
        console.error("Ошибка:", error)
      }
    }
    Posts()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setSuccess("")
    try {
      const res = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1,
      });
      if (res.data) {
        setSuccess("Пост успешно создан!")
        setTitle("")
        setBody("")
      }
    } catch (error) {
      console.error("Ошибка при создании поста:", error)
    }
  }

  return (
    <div className={style.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <strong className={style.title}>{post.title}</strong>
            <p className={style.body}>{post.body}</p>
          </li>
        ))}
    

      <h3>Создать новый пост</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input className={style.input}
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            
          />
        </div>
        <div>
          <textarea className={style.input}
            placeholder="Текст поста"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows={4}
          />
        </div>
        <button className={style.button} type="submit">
          Отправить
        </button>
      </form>

      {success && <p className={style.success}>{success}</p>}
    </div>
  )
}

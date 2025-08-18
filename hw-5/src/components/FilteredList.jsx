import React, { useState, useMemo, useCallback } from "react"

export const FilteredList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ])
  const [filter, setFilter] = useState("")
  const [newUserName, setNewUserName] = useState("")

  const filteredUsers = useMemo(() => {
    console.log("Фильтруем пользователей")
    return users.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [users, filter])

  const addUser = useCallback(() => {
    const newId = users.length + 1
    setUsers(prev => [...prev, { id: newId, name: newUserName }])
    setNewUserName("")
  }, [newUserName, users])

  return (
    <div>
      <h2>Список пользователей</h2>
      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      
        {filteredUsers.map(user => (
        <p key={user.id}>{user.name}</p>
        ))}
      

      <input
        type="text"
        placeholder="Имя нового пользователя"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={addUser}>Добавить пользователя</button>
    </div>
  )
}

// components/UserList.jsx
import { UserCard } from './UserCard.jsx';

export const UserList = ({ users }) => (
    <div className='user-list'>
        {users
            .filter(user => user.active)
            .map((user, index) => (
                <UserCard
                    key={index}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    age={user.age}
                    gender={user.gender}
                    phone={user.phone}
                    country={user.country}
                />
            ))}
    </div>
)


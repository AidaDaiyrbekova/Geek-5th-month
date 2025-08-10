export const UserCard = ({firstName, lastName, age, gender, phone, country}) => {

    return (
        <div className='user-item'>
            <h4>{firstName}</h4>
            <h5>{lastName}</h5>
            <span><strong>Age:</strong> {age}</span>
            <span><strong>Gender:</strong> {gender}</span>
            <span><strong>Phone:</strong> {phone}</span>
            <h5><strong>Country:</strong>{country}</h5>

        </div>
    )
}
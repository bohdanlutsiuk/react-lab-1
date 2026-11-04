import { useState } from 'react'

function ProfileCard({ name, group, technologies }) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="profile-card">
      <h2>Про мене</h2>
      <p>
        <strong>Ім’я:</strong> {name}
      </p>
      <p>
        <strong>Група:</strong> {group}
      </p>
      <div>
        <strong>Технології, які я хочу опанувати:</strong>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={() => setLikes((prev) => prev + 1)}>
        Подобається: {likes}
      </button>
    </div>
  )
}

export default ProfileCard

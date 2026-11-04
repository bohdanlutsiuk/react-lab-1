import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  const userData = {
    name: 'Bohdan Lutsiuk',
    group: 'KN-313',
    technologies: ['React', 'Vite', 'Node.js'],
  }

  return (
    <div id="center">
      <ProfileCard
        name={userData.name}
        group={userData.group}
        technologies={userData.technologies}
      />
    </div>
  )
}

export default App

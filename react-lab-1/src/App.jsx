import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  const userData = {
    name: 'Junie (AI Assistant)',
    group: 'AI-2026',
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

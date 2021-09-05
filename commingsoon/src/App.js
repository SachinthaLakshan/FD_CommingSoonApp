import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;

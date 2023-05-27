import * as API from './service/launches';
import { useState, useEffect } from 'react';
import Logo from './assets/logo-spacex.png';
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './componentes/LaunchItem';

function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={Logo} width={300} m={4} />
      <Heading align='center' as='h1' size='xl' m={4}>SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  )
}

export default App

import type { NextPage } from 'next';
import { Box } from '../components/Box';
import { Button } from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Box color="red" bg="green" width={[1, 1 / 2, 1 / 4]}>
        Box with red text and green background
      </Box>
      <Box>And one with default style props</Box>
      <Button variant="primary">Hello, I&apos;m a primary button!</Button>
      <Button variant="secondary">And I&apos;m secondary</Button>
    </>
  );
};

export default Home;

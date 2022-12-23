import { ThreeDots } from 'react-loader-spinner';

export const Loader = _ => (
  <ThreeDots
    height="20"
    width="100"
    radius="9"
    color="#a9a9a9"
    ariaLabel="loading..."
    visible={true}
  />
);

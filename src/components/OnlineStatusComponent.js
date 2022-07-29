import { useOnlineStatus } from 'hooks/useOnlineStatus';

const OnlineStatusComponent = () => {
  const online = useOnlineStatus();
  return <p>{online.toString()}</p>;
};

export default OnlineStatusComponent;

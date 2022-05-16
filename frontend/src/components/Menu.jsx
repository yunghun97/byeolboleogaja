import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Logout, VolumeUp, Public } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  const controlSounds = () => {};
  const goWorld = () => {
    navigate('/world');
  };
  const actionMenu = [
    { icon: <Logout />, name: '종료하기', move: goMain },
    { icon: <VolumeUp />, name: '배경음악 조절', move: controlSounds },
    { icon: <Public />, name: '월드로 돌아가기', move: goWorld },
  ];
  return (
    <SpeedDial
      ariaLabel="Museum menu"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actionMenu.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.move}
        />
      ))}
    </SpeedDial>
  );
};
export default Menu;

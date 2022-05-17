import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Logout, VolumeUp, Public, QuestionMark } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Menu = ({ isGuideDialog, isWorld, setGuideOpen }) => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  const controlSounds = () => {};
  const goWorld = () => {
    navigate('/world');
  };

  const openGuide = () => {
    setGuideOpen(true);
  };
  const actionMenu = [
    { icon: <Logout />, name: '종료하기', move: goMain },
    { icon: <VolumeUp />, name: '배경음악 조절', move: controlSounds },

    isWorld ? { icon: <Public />, name: '월드로 돌아가기', move: goWorld } : {},
    isGuideDialog
      ? {
          icon: <QuestionMark />,
          name: '가이드 보기',
          move: openGuide,
        }
      : {},
  ];
  const NewactionMenu = actionMenu.filter(
    (element, i) => Object.keys(element).length != 0,
  );

  return (
    <SpeedDial
      ariaLabel="Museum menu"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {NewactionMenu.map((action) => (
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

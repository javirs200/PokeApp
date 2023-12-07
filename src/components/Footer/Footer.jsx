import { BottomNavigation,BottomNavigationAction } from '@mui/material';
import { Adb,Favorite } from '@mui/icons-material'

const Footer = () => {
  return (<>
      <div className='miFooter'>
        <BottomNavigation>
          <BottomNavigationAction icon={<Adb></Adb>}></BottomNavigationAction>
          <BottomNavigationAction icon={<Adb></Adb>}></BottomNavigationAction>
          <BottomNavigationAction icon={<Adb></Adb>}></BottomNavigationAction>
          <BottomNavigationAction icon={<Adb></Adb>}></BottomNavigationAction>
        </BottomNavigation>
      </div>
  </>);
};

export default Footer;

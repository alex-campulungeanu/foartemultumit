// import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';

import redirect from '@src/lib/redirect';
import {Divider} from '@components/misc/Divider'

interface SideBarIconProps {
  icon: JSX.Element,
  text?: string,
  onClick?: () => void
}

const goTo = (to: string) => {
  redirect(to);
}

const SideBar = () => {

  return (
    <div className="sidebar-container">
      <SideBarIcon 
        icon={<FaRegCommentDots size="28" />}
        text='Filter them ! 💡'
        onClick={() => console.log('someclick')}
      />
      <Divider borderColor='red' />
      {/* <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} /> */}
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'Filter them ! 💡' }: SideBarIconProps) => (
  <div className="sidebar-icon group" onClick={() => goTo('/')}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar;

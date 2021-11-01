// import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';

import redirect from '@src/lib/redirect';

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
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon 
        icon={<FaRegCommentDots size="28" />}
        text='Filter them ! 💡'
        onClick={() => console.log('someclick')}
      />
      <Divider />
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


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;

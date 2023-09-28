import React from 'react';
import * as icons from 'lucide-react';

interface IIconProps {
  name: keyof typeof icons;
}

const Icon: React.FC<IIconProps> = ({ name }) => {
  const LucideIcon = icons[name];
  return (
    <>
      <LucideIcon size={24} />
    </>
  );
};

interface INavButtonProps {
  name?: string;
  icon: keyof typeof icons;
}

const NavButton: React.FC<INavButtonProps> = (props) => {
  if (props.name) {
    return (
      <div className="h-[50px] w-[250px] p-5 flex justify-start items-center gap-5 hover:bg-[rgba(255,255,255,0.15)] rounded-xl hover:text-white text-white/50">
        <Icon name={props.icon} />
        {props.name}
      </div>
    );
  }

  return (
    <div className="h-[50px] w-[90%] p-5 flex justify-start items-center gap-5 hover:bg-[rgba(255,255,255,0.15)] rounded-xl hover:text-white text-white/50">
      <Icon name={props.icon} />
    </div>
  );
};

export default NavButton;

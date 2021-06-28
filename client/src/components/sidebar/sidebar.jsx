import React from 'react';
import styles from './sidebar.module.css';
import { RiPlayListFill } from 'react-icons/ri';
import { AiFillHome, AiFillFire, AiFillHeart } from 'react-icons/ai';
import { FaGuitar } from 'react-icons/fa';
import SidebarItem from '../sidebar_item/sidebar_item';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem icon={<AiFillHome />} label='Home' />
      <SidebarItem icon={<AiFillFire />} label='Trending' />
      <SidebarItem icon={<RiPlayListFill />} label='My Playlist' />
      <SidebarItem icon={<AiFillHeart />} label='Favorites' />
      <SidebarItem icon={<FaGuitar />} label='Genres' />
    </div>
  );
};

export default Sidebar;

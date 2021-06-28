import React from 'react';
import styles from './sidebar_item.module.css';

const SidebarItem = ({ icon, label }) => {
  return (
    <button className={styles.sidebar_row}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{label}</span>
    </button>
  );
};

export default SidebarItem;

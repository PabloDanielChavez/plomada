"use client";
import styles_header from '@/styles/sections/header.module.scss';
import Link from 'next/link';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { IoMdLink } from 'react-icons/io';
import { LuConstruction } from 'react-icons/lu';
import { MdConstruction } from 'react-icons/md';


export default function Header() {
  return (
    <header className={styles_header.header}>
      <div className={styles_header.header_container}>
        <div className={styles_header.header_logo}>
          <span className={styles_header.header_icon}><MdConstruction size={28} /></span> 
          <span>Plomada</span>
        </div>
        <div className={styles_header.header_actions}>
          <button className={styles_header.header_menuBtn} aria-label="Menu">
            <BiMenu size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
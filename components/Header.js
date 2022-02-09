import Image from 'next/image';
import React from 'react';
import { BadgeIcon } from '../icons/BadgeIcon';
import { CollectionIcon } from '../icons/CollectionIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { Lightning } from '../icons/Lightning';
import { SearchIcon } from '../icons/SearchIcon';
import { UserIcon } from '../icons/UserIcon';

export const Header = () => {
  return <header className='min-h-10 flex items-center justify-center  flex-wrap py-6 xs:justify-between  box-border'>
      <section className='flex h-10 items-center sm:mb-[-20px] '>
          <HomeIcon/>
          <CollectionIcon/>
          <BadgeIcon/>
          <Lightning/>
          <SearchIcon/>
          <UserIcon/>
      </section>
      <span className='px-4 flex justify-center'>
      <Image src="/assets/hulu.svg" width={100} height={30}/>
      </span>
  </header>;
};

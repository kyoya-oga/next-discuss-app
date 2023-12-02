import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { auth } from '@/auth';
import Link from 'next/link';
import { ReactNode } from 'react';
import * as actions from '@/actions';

type Props = {};

export default async function Header({}: Props) {
  const session = await auth();

  let authContent: ReactNode;
  if (session?.user) {
    authContent = (
      <Popover placement='left'>
        <PopoverTrigger>
          <Avatar src={session.user.image || ''} className='cursor-pointer' />
        </PopoverTrigger>
        <PopoverContent>
          <div className='p-4'>
            <form action={actions.singOut}>
              <Button type='submit'>Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.singIn}>
            <Button type='submit' color='secondary' variant='bordered'>
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.singIn}>
            <Button type='submit' color='primary' variant='flat'>
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>{authContent}</NavbarContent>
    </Navbar>
  );
}

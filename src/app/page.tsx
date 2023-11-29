import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.singIn}>
        <Button type='submit'>Sing In</Button>
      </form>
      <form action={actions.singOut}>
        <Button type='submit'>Sing Out</Button>
      </form>

      {session?.user ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}

      <hr />

      <Profile />
    </div>
  );
}

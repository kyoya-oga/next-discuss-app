import { db } from '@/db';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <ul className='flex flex-row flex-wrap gap-2'>
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link href={paths.topicShow(topic.slug)}>
            <Chip color='warning' variant='shadow'>
              {topic.slug}
            </Chip>
          </Link>
        </li>
      ))}
    </ul>
  );
}

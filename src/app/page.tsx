import dayjs from 'dayjs';
import Link from 'next/link';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  console.log(
    `[${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}]Home loaded`,
    searchParams
  );

  return (
    <div className='mb-10 h-screen'>
      <p className='font-bold italic text-[20px]'>
        I made the root page dynamic route using searchParams.
      </p>
      searchParams: <pre>{JSON.stringify(searchParams, null)}</pre>
      <br />
      page loaded time:{' '}
      <span className='text-rose-600 font-bold'>
        {dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
      </span>
      <br />
      Random number(1-100):{' '}
      <span className='text-rose-600 font-bold'>
        {Math.ceil(Math.random() * 100)}
      </span>
      <br />
      <br />
      <code className='font-bold'>
        When the button is pressed, the modal is opened with intercepting routes
        and the method in the server action is executed when the component is
        mounted. The method has an execution time of 3 seconds.
      </code>
      <br />
      <br />
      <Link
        scroll={false}
        href={'/server-action-modal'}
        className='p-2 rounded-md bg-black text-white'
      >
        intercepting-routes-with-server-action-modal-open
      </Link>
      <br />
      <br />
      <code className='font-bold'>
        When interception routes are terminated by pressing the back button
        without completing the server action in the modal, app/page.tsx is newly
        called.
      </code>
    </div>
  );
}

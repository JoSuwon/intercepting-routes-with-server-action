'use client';

import { duringThreeSeconds } from '@/util/actions';
import { useEffect, useState } from 'react';

export default function ServerActionModal() {
  const [isFinishServerAction, setIsFinishServerAction] = useState(false);

  useEffect(() => {
    duringThreeSeconds().then(() => {
      console.log('server action done');
      setIsFinishServerAction(true);
    });
  }, []);

  return (
    <div className='w-screen h-screen bg-black/80 overflow-hidden fixed top-0 left-0 flex items-center justify-center'>
      <div className='bg-white rounded-lg p-[20px]'>
        this is client modal with server action on mounted <br />
        <p className='font-bold'>
          {isFinishServerAction
            ? 'server action done'
            : 'server action loading...'}
        </p>
      </div>
    </div>
  );
}

'use client';

import React, { ChangeEvent, useState } from 'react';

function FontTestPage() {
  const [text, setText] = useState<string>(
    'Whereas recognition of the inherent dignity'
  );

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <input
        className='w-full p-4 bg-black text-4xl text-center'
        type='text'
        value={text}
        onChange={handleChangeText}
      />

      <h1 className='font-chivo text-4xl font-extralight'>{text}</h1>
      <h1 className='font-chivo text-4xl font-medium'>{text}</h1>
      <h1 className='font-chivo text-4xl font-bold'>{text}</h1>

      <h1 className='font-work_sans text-4xl font-extralight'>{text}</h1>
      <h1 className='font-work_sans text-4xl font-medium'>{text}</h1>
      <h1 className='font-work_sans text-4xl font-extrabold'>{text}</h1>
    </main>
  );
}

export default FontTestPage;

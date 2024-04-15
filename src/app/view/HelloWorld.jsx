import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export function HelloWorld() {
  const handleSendEmail = () => {
    const emailLink = `mailto:labheshwar.work@gmail.com?subject=Loved%20it!`;

    if (
      confirm(
        'Are you sure you want to send an email to labheshwar.work@gmail.com with the subject "Loved it!"?'
      )
    ) {
      window.open(emailLink, '_blank');
    } else {
      console.log('Email sending cancelled.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-600 to-red-500'>
      <h1 className='text-6xl font-bold text-white'>Hello World</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button className='mt-5'>Click Me</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Loved working with Labesh?</DialogTitle>
            <DialogDescription>
              Did you liked my work and want me to work for you?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleSendEmail}>Absolutely Yes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

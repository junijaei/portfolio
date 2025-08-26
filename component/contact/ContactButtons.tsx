import ContactButton from '@/component/contact/ContactButton';
import { LucideMail, LucideNotepadText } from 'lucide-react';
import GithubIcon from '@/component/contact/GithubIcon';

export default function ContactButtons() {
  return (
    <div className={'flex gap-2 lg:gap-4'}>
      <ContactButton
        label={'메일'}
        link={'mailto:hjhj7895598@gmail.com'}
      >
        <LucideMail
          aria-hidden={true}
          className={'h-5 w-5 lg:h-6 lg:w-6'}
        />
        <span className={'hidden lg:inline'}>Email</span>
      </ContactButton>
      <ContactButton
        label={'깃허브'}
        link={'https://github.com/junijaei'}
      >
        <GithubIcon
          aria-hidden={true}
          className={'h-5 w-5 lg:h-6 lg:w-6'}
        />
        <span className={'hidden lg:inline'}>GitHub</span>
      </ContactButton>
      <ContactButton
        label={'블로그'}
        link={'https://junijaei.tistory.com/'}
      >
        <LucideNotepadText
          aria-hidden={true}
          className={'h-5 w-5 lg:h-6 lg:w-6'}
        />
        <span className={'hidden lg:inline'}>Blog</span>
      </ContactButton>
    </div>
  );
}

import ContactButton from '@/component/contract/ContactButton';
import { LucideMail, LucideNotepadText } from 'lucide-react';
import GithubIcon from '@/component/GithubIcon';

export default function ContractButtons() {
  return (
    <div className={'flex gap-2 lg:gap-4'}>
      <ContactButton link={'mailto:hjhj7895598@gmail.com'}>
        <LucideMail className={'h-5 w-5 lg:h-6 lg:w-6'} />
        <span className={'hidden lg:inline'}>Email</span>
      </ContactButton>
      <ContactButton link={'https://github.com/junijaei'}>
        <GithubIcon className={'h-5 w-5 lg:h-6 lg:w-6'} />
        <span className={'hidden lg:inline'}>GitHub</span>
      </ContactButton>
      <ContactButton link={'https://junijaei.tistory.com/'}>
        <LucideNotepadText className={'h-5 w-5 lg:h-6 lg:w-6'} />
        <span className={'hidden lg:inline'}>Blog</span>
      </ContactButton>
    </div>
  );
}

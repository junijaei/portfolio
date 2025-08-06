import type { Blog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';
import PointText from '@/component/PointText';

export default function Blog({ blogs }: { blogs: Blog[] }) {
  return (
    <div className={'flex-center flex-col gap-8'}>
      <ul className={'mx-36 grid grid-cols-2 gap-8'}>
        {blogs.map(blog => (
          <Link
            key={blog.link}
            className={'group relative block'}
            href={blog.link}
            target={'_blank'}
          >
            <div
              className={
                'border-surface-300 flex h-full w-full flex-col overflow-hidden'
              }
            >
              <div className={'relative aspect-square w-full overflow-hidden'}>
                <Image
                  fill
                  alt={`${blog.title} 썸네일 이미지`}
                  className={'blur-xs object-cover transition'}
                  src={blog.thumbnail}
                />
                <div
                  className={'bg-content-100/70 absolute z-10 h-full w-full'}
                />
                <div
                  className={
                    'absolute z-10 flex h-full flex-col justify-between break-keep p-8'
                  }
                >
                  <h3 className={'text-surface break-keep text-xl font-bold'}>
                    {blog.title}
                  </h3>
                  <hr className={'text-surface-300'} />
                  <p className={'text-surface-200'}>{blog.summary}</p>
                </div>
                <h3 className={'break-keep p-2 text-lg font-bold'}>
                  {blog.title}
                  <PointText>.</PointText>
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </ul>
      <Link
        className={
          'flex-center bg-surface-300 text-content-100 hover:bg-surface-400 cursor-pointer gap-2 rounded-full py-2 pl-7 pr-5 transition'
        }
        href={'https://junijaei.tistory.com/'}
        target={'_blank'}
      >
        블로그 더 보러 가기
        <LucideArrowUpRight className={'ml-1 h-6 w-6'} />
      </Link>
    </div>
  );
}

'use client';

import type { Blog } from '@/types';
import Image from 'next/image';
import { LucideArrowUpRight } from 'lucide-react';
import PointText from '@/component/PointText';
import { motion } from 'framer-motion';

export default function Blog({ blogs }: { blogs: Blog[] }) {
  return (
    <div className={'flex-center w-full flex-col gap-8'}>
      <ul className={'grid w-full grid-cols-2 gap-2 lg:gap-8 lg:px-36'}>
        {blogs.map((blog, index) => (
          <motion.li
            key={blog.link}
            className={'relative'}
            initial={{ opacity: 0, translateY: 20 }}
            transition={{
              delay: 0.3 + Math.floor(index / 2) * 0.2,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            <a
              aria-label={`새 창에서 ${blog.title} 블로그 글 열기`}
              className={'flex flex-col overflow-hidden'}
              href={blog.link}
              target={'_blank'}
            >
              <figure className={'relative aspect-square overflow-hidden'}>
                <Image
                  fill
                  alt={`${blog.title} 썸네일`}
                  className={'blur-xs object-cover transition'}
                  src={blog.thumbnail}
                />
                <div
                  aria-hidden={true}
                  className={'bg-content-300/70 absolute z-10 h-full w-full'}
                />
                <figcaption
                  className={
                    'absolute z-10 flex h-full flex-col justify-between break-keep p-4'
                  }
                >
                  <h3
                    className={
                      'text-surface-100 basis-1/3 break-keep p-2 font-bold lg:text-xl'
                    }
                  >
                    {blog.title}
                    <PointText>.</PointText>
                  </h3>
                  <hr
                    aria-hidden={true}
                    className={'text-surface-300'}
                  />
                  <p className={'text-surface-200 hidden lg:block'}>
                    {blog.summary}
                  </p>
                </figcaption>
              </figure>
            </a>
          </motion.li>
        ))}
      </ul>
      <a
        aria-label={'새 창에서 블로그 열기'}
        className={
          'flex-center bg-surface-300 text-content-100 hover:bg-surface-400 cursor-pointer gap-2 rounded-full py-2 pl-7 pr-5 transition'
        }
        href={'https://junijaei.tistory.com/'}
        target={'_blank'}
      >
        블로그 더 보러 가기
        <LucideArrowUpRight
          aria-hidden={true}
          className={'ml-1 h-6 w-6'}
        />
      </a>
    </div>
  );
}

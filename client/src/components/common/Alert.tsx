import Container from './Container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '@/lib/constants';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  console.log('preview >>> ', preview);

  return (
    <div
      className={cn('border-b ', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm ">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <div className="flex items-center justify-center text-gray-800 hover:text-blue-600 duration-200 transition-colors underline cursor-pointer">
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className=""
              >
                구독하기
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;

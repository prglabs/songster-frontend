'use client';
import { useClientMediaQuery } from '@/hook/useClientMediaQuery';
import { cn } from '@/lib/utils';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type ContactsProps = {
  className?: string;
  color?: keyof typeof bgColor;
  size?: keyof typeof sizeVariants;
};

const bgColor = {
  black: { main: 'black', contrast: 'white' },
  white: { main: 'white', contrast: 'black' },
  primary: {
    main: 'hsl(var(--primary-foreground))',
    contrast: 'hsl(var(--primary))',
  },
};

const sizeVariants = {
  small: { email: 32, linkedin: 32, medium: 32 },
  medium: { email: 42, linkedin: 32, medium: 42 },
  large: { email: 56, linkedin: 56, medium: 32 },
};

const Contacts = ({
  color = 'black',
  size = 'medium',
  className = '',
}: ContactsProps) => {
  const isMobile = useClientMediaQuery('(max-width: 600px)');
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      <a
        href='https://www.linkedin.com/company/songstergroup'
        target='_blank'
        rel='noopener noreferrer'
        title='Songster Group Linkedin Profile'
        aria-label='Songster Group Linkedin Profile'
        className='block'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size='3x'
          color={color === 'primary' ? 'white' : bgColor[color].main}
          width={
            isMobile
              ? sizeVariants[size].linkedin - 8
              : sizeVariants[size].linkedin
          }
          height={
            isMobile
              ? sizeVariants[size].linkedin - 8
              : sizeVariants[size].linkedin
          }
        />
      </a>
      <a
        href='https://medium.com/@songstergroup'
        target='_blank'
        rel='noopener noreferrer'
        title='Songster Group Medium'
      >
        <svg
          width={
            isMobile ? sizeVariants[size].medium - 8 : sizeVariants[size].medium
          }
          height={
            isMobile ? sizeVariants[size].medium - 8 : sizeVariants[size].medium
          }
          viewBox='0 -55 256 256'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'
        >
          <g>
            <path
              d='M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z'
              fill={color === 'primary' ? 'white' : bgColor[color].main}
            ></path>
          </g>
        </svg>
      </a>
      <a
        href='mailto: media@songstervc.com'
        target='_blank'
        rel='noopener noreferrer'
        className='block'
        title='email to media@songstervc.com'
        aria-label='email to media@songstervc.com'
      >
        <svg
          width={
            isMobile ? sizeVariants[size].email - 8 : sizeVariants[size].email
          }
          height={
            isMobile ? sizeVariants[size].email - 8 : sizeVariants[size].email
          }
          viewBox='0 0 480 480'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='30'
            y='80'
            width='420'
            height='320'
            rx='49'
            fill={bgColor[color].main}
          />
          <path
            d='M241.314 208.372L397.729 80H82.2708L241.314 208.372Z'
            fill={bgColor[color].contrast}
          />
          <path
            d='M360 248.636L240 323.51L119.759 400H360V248.636Z'
            fill={bgColor[color].contrast}
          />
          <path
            d='M119.781 248.636L239.891 323.51L360 400H119.781V248.636Z'
            fill={bgColor[color].contrast}
          />
        </svg>
      </a>
    </div>
  );
};

export default Contacts;

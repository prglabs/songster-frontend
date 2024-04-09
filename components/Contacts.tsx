import { cn } from '@/lib/utils';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VariantProps, cva } from 'class-variance-authority';

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
  small: { email: 32, linkedin: 32 },
  medium: { email: 42, linkedin: 32 },
  large: { email: 56, linkedin: 56 },
};

const Contacts = ({
  color = 'black',
  size = 'medium',
  className = '',
}: ContactsProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <a
        href='https://www.linkedin.com/company/songster-capital'
        target='_blank'
        rel='noopener noreferrer'
        title='Songster-capital Linkedin Profile'
        aria-label='Songster-capital Linkedin Profile'
        className='block'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size='3x'
          color={color === 'primary' ? 'white' : bgColor[color].main}
          width={sizeVariants[size].linkedin}
          height={sizeVariants[size].linkedin}
        />
      </a>
      <a
        href='mailto: media@songstercapital.com'
        target='_blank'
        rel='noopener noreferrer'
        className='block'
        title='Send email to media@songstercapital.com'
        aria-label='Send email to media@songstercapital.com'
      >
        <svg
          width={sizeVariants[size].email}
          height={sizeVariants[size].email}
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

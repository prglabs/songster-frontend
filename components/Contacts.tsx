import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ContactsProps = {
  color?: 'black' | 'primary' | 'white';
  classNameWrapper?: string;
};

const bgColor = {
  black: 'white',
  white: 'black',
  primary: '#6366f3',
};
const Contacts = ({ color = 'black', classNameWrapper }: ContactsProps) => {
  return (
    <div
      className={`mt-4 flex items-center justify-center gap-3 ${classNameWrapper}`}
    >
      <a
        href='https://www.linkedin.com/company/songster-capital'
        target='_blank'
        rel='noopener noreferrer'
        className='block'
        title='Songster-capital Linkedin Profile'
        aria-label='Songster-capital Linkedin Profile'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size='2x'
          color={color === 'primary' ? 'white' : color}
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
          width='40'
          height='40'
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
            fill={color === 'primary' ? 'white' : color}
          />
          <path
            d='M241.314 208.372L397.729 80H82.2708L241.314 208.372Z'
            fill={bgColor[color]}
          />
          <path
            d='M360 248.636L240 323.51L119.759 400H360V248.636Z'
            fill={bgColor[color]}
          />
          <path
            d='M119.781 248.636L239.891 323.51L360 400H119.781V248.636Z'
            fill={bgColor[color]}
          />
        </svg>
      </a>
    </div>
  );
};

export default Contacts;

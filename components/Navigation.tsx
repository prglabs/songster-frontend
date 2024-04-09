import navigationData from '@/constant/navigation.json';
import { cn } from '@/lib/utils';

type NavigationTypes = {
  className?: string;
};
export const Navigation = ({ className }: NavigationTypes) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-10',
        className
      )}
    >
      {navigationData.map((item) => (
        <a className='text-lg font-medium' key={item.name} href={item.link}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

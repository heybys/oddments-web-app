import {lazy, Suspense} from 'react';
import {LucideProps} from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const Fallback = ({size}: {size: string | number}) => <div className="bg-gray-50 rounded" style={{ width: size, height: size }}/>

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({name, size = 24, ...props}: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
      <Suspense fallback={<Fallback size={size}/>}>
        <LucideIcon size={size} {...props} />
      </Suspense>
  );
}

export default Icon
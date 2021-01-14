import { FunctionComponent } from 'react';
import Typography from './Typography';

interface TextProps {
  className?: string;
}

export const Text: FunctionComponent<TextProps> = ({ className, ...rest }) => {
  return (
    <Typography tag='p' className={className} {...rest} />
  );
}

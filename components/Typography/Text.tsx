import { FunctionComponent } from 'react';
import Typography from './Typography';

interface TextProps {}

export const Text: FunctionComponent<TextProps> = ({ ...rest }) => {
  return (
    <Typography tag='p' {...rest} />
  );
}

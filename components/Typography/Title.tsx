import { FunctionComponent, ReactHTML } from 'react';
import Typography from './Typography';
import { tupleNum } from 'utils/types';

const HEADER_LEVELS = tupleNum(1, 2, 3, 4);

interface TitleProps {
  level: typeof HEADER_LEVELS[number];
}

export const Title: FunctionComponent<TitleProps> = ({ level = 1, ...rest }) => {
  let tag: keyof ReactHTML;

  if (HEADER_LEVELS.indexOf(level) !== -1) {
    tag = `h${level}` as keyof ReactHTML;
  } 

  return (
    <Typography tag={tag} {...rest} />
  );
}

import React, { FunctionComponent, ReactHTML } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

export interface InternalTypographyProps {
  bold?: boolean;
  tag?: keyof ReactHTML;
  className?: string;
};

const cx = classNames.bind(styles);

const Typography: React.ForwardRefRenderFunction<{}, InternalTypographyProps> = ({
  bold = false,
  tag = 'p',
  children,
  className,
  ...rest
}) => {
  console.log('/// className', className)
  const classes = cx({
    typography: true,
    h1: tag === 'h1',
    h2: tag === 'h2',
    h3: tag === 'h3',
    p: tag === 'p',
  }, className);

  return React.createElement(tag, { className: classes, ...rest }, children);
}

export default Typography;

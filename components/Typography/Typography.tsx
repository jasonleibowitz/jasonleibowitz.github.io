import React, { FunctionComponent, ReactHTML } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

export interface InternalTypographyProps {
  bold?: boolean;
  tag?: keyof ReactHTML;
};

const cx = classNames.bind(styles);

const Typography: React.ForwardRefRenderFunction<{}, InternalTypographyProps> = ({
  bold = false,
  tag = 'p',
  children,
  ...rest
}) => {
  const className = cx({
    typography: true,
    h1: tag === 'h1',
    h2: tag === 'h2',
    h3: tag === 'h3',
    p: tag === 'p'
  });

  return React.createElement(tag, { className, ...rest }, children);
}

export default Typography;

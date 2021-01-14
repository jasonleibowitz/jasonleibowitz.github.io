import OriginTypography from './Typography';
import { Title } from './Title';
import { Text } from './Text';

type TypographyProps = typeof OriginTypography & {
  Title: typeof Title;
  Text: typeof Text;
}

const Typography = OriginTypography as TypographyProps;
Typography.Title = Title;
Typography.Text = Text;

export {Typography};

import 'next-intl';
import { Messages } from './types/intl';

declare module 'next-intl' {
  interface IntlMessages extends Messages {}
}

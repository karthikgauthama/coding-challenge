import { withStyles } from '@material-ui/core';
import { Flex } from './Flex';

export const Column = withStyles({
  root: {
    flexDirection: 'column',
  },
})(Flex);

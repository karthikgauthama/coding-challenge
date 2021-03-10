import { withStyles } from '@material-ui/core';
import { Flex } from './Flex';

export const Row = withStyles({
  root: {
    flexDirection: 'row',
  },
})(Flex);

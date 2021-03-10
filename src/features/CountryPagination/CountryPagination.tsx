import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { change, selectCurrentPageSize } from './CountrySlice';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const CountryPagination = () => {
  const pageCount = useSelector(selectCurrentPageSize);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        page={pageCount}
        color="secondary"
        onClick={(event) => console.log('bbb', event)}
        onChange={(event, page) => {
          console.log('aaa', page);
          dispatch(change(page));
        }}
      />
    </div>
  );
};

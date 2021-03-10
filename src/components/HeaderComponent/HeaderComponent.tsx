import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { navigateToHome, navigateToSearch } from '../../utils/global';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { search } from '../../features/SearchProvider/SearchSlice';
import { TripsDropdown } from '../TripsDropdown';
import { CreateTripButton } from '../CreateTripButton';
import { LanguageSelector } from '../LanguageSelector';
import { DeleteTripButton } from '../DeleteTrip';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const HeaderComponent: React.FC = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LanguageSelector />
          <Typography className={classes.title} variant="h6" noWrap>
            Trip-Planner
          </Typography>
          <IconButton
            edge="end"
            aria-label="home"
            style={{ marginRight: '40px' }}
            onClick={() => history.push(navigateToHome(searchText))}
          >
            <HomeIcon style={{ color: '#e0e0e0', fontSize: 40 }} />
          </IconButton>
          <DeleteTripButton />
          <CreateTripButton />
          <TripsDropdown />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon onClick={() => navigateToSearch(searchText)} />
            </div>
            <InputBase
              placeholder="Country or Capital"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  dispatch(search(searchText));
                  history.push(navigateToSearch(searchText));
                }
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

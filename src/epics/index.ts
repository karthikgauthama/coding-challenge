import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { pingEpic } from './ping';

export const rootEpic = (action$: any, store$: any, dependencies: any) =>
  // @ts-ignore
  combineEpics(pingEpic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );

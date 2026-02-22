import { createAction } from '../actions';

export const serviceWorkerDidUpdate = createAction(() => ({
    type: 'serviceWorker.action.didUpdate',
}));

export const serviceWorkerDidSucceed = createAction(() => ({
    type: 'serviceWorker.action.didSucceed',
}));

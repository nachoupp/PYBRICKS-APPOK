import { createAction } from '../../actions';

/** Actions that request the DFU Windows USB driver install dialog to be shown. */
export const firmwareDfuWindowsDriverInstallDialogDialogShow = createAction(() => ({
    type: 'firmware.dfuWindowsDriverInstallDialog.action.show',
}));

/** Actions that request the DFU Windows USB driver install dialog to be hidden. */
export const firmwareDfuWindowsDriverInstallDialogDialogHide = createAction(() => ({
    type: 'firmware.dfuWindowsDriverInstallDialog.action.hide',
}));

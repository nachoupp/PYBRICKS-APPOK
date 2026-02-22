import { AnyAction } from 'redux';

import reducers from './reducers';

test('initial state', () => {
    expect(reducers(undefined, {} as AnyAction)).toMatchInlineSnapshot(`
        {
          "dfuWindowsDriverInstallDialog": {
            "isOpen": false,
          },
          "installPybricksDialog": {
            "isOpen": false,
          },
          "isFirmwareFlashEV3InProgress": false,
          "isFirmwareFlashUsbDfuInProgress": false,
          "isFirmwareRestoreOfficialDfuInProgress": false,
          "restoreOfficialDialog": {
            "isOpen": false,
          },
        }
    `);
});

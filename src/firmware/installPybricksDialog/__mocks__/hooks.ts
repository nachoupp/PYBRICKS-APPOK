import type { Hub } from '../../../components/hubPicker';

export function useFirmware(_hubType: Hub) {
    return {
        firmwareData: {
            firmwareZip: new ArrayBuffer(0),
            licenseText: 'test',
            metadata: {},
        },
        firmwareError: undefined,
    };
}

export function useCustomFirmware(_zipFile: File | undefined) {
    return {
        isCustomFirmwareRequested: false,
        customFirmwareData: undefined,
        customFirmwareError: undefined,
    };
}

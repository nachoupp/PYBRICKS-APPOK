import { CustomError } from '../utils/customError';

/** Specific errors for editor subsystem. */
export type ExplorerErrorName = 'NoFiles';

/** Error class for editor subsystem. */
export class ExplorerError extends CustomError<ExplorerErrorName> {}

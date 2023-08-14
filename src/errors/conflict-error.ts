import { ERROR_NAMES, HTTP_STATUS_CODE } from '../constants/index';
import { BaseError } from './index';

export default class ConflictError extends BaseError {
  constructor(message: string) {
    super(ERROR_NAMES.CONFLICT, HTTP_STATUS_CODE.CONFLICT, message, true);
  }
}

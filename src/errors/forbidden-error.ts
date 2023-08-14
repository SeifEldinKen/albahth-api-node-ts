import { ERROR_NAMES, HTTP_STATUS_CODE } from '../constants/index';
import { BaseError } from './index';

export default class ForbiddenError extends BaseError {
  constructor(message: string) {
    super(ERROR_NAMES.FORBIDDEN, HTTP_STATUS_CODE.FORBIDDEN, message, true);
  }
}

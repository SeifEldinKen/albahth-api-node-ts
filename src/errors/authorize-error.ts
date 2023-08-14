import { ERROR_TYPES, HTTP_STATUS_CODE } from '../constants/index';
import { BaseError } from './index';

export default class AuthorizeError extends BaseError {
  constructor(message: string) {
    super(ERROR_TYPES.AUTHORIZE, HTTP_STATUS_CODE.UNAUTHORIZED, message, true);
  }
}

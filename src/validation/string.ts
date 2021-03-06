import { RequestParamError } from '../error/index';

export function validateStringMin(name: string, min: number): (value: string) => void {
  return (value: string) => {
    if (value.length < min) {
      throw new RequestParamError(`validates fail: "${name}" length is smaller than ${min}`);
    }
  };
}

export function validateStringMax(name: string, max: number): (value: string) => void {
  return (value: string) => {
    if (value.length > max) {
      throw new RequestParamError(`validates fail: "${name}" length is greater than ${max}`);
    }
  };
}

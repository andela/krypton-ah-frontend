import 'jest-localstorage-mock';
import { setToken, getUserIdFromLocalStorage } from '../jwt';
import { jwtToken } from '../../mockData';
import { authentication } from '../../constants';

describe('save token to local storage', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should set token to the local storage when the setToken function is called', () => {
    setToken('sampleToken');
    expect(localStorage.__STORE__.authentication).toBe('sampleToken');
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});

describe('getUserIdFromLocalStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should not get a userId', () => {
    localStorage.clear();
    expect(getUserIdFromLocalStorage()).toBe(null);
  });
  it('should return a userId', () => {
    localStorage.setItem(authentication, jwtToken);
    expect(getUserIdFromLocalStorage()).toBe('d1564aa6-e81d-41ab-8469-0aa573f4a6c5');
  });
});

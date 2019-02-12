import 'jest-localstorage-mock';
import setToken from '../jwt';

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

import { getToken } from '@/utils/token';
import { useState } from 'react';

const useLogin = () => {
  const token = getToken();
  const [isLogin] = useState(!!token);

  return isLogin;
};

export default useLogin;

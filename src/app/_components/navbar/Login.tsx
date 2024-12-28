import React from 'react';
import CusotmButton from '../button/CusotmButton';
import Person from '../general/icons/Person';
import Link from 'next/link';

const Login = () => {
  return (
    <Link href={'https://novapay.solutions/merchant'}>
      <CusotmButton icon={<Person />} title="SIGN IN" />
    </Link>
  );
};

export default Login;

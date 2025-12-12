import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading';
import Forbidden from '../components/Forbidden';

const BuyerRoutes = ({children}) => {
  const {user,loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user ||roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "buyer" ) {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default BuyerRoutes;
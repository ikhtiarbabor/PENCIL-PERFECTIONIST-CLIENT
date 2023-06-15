const useTokenConfig = () => {
  const config = {
    headers: {
      authorization: `bearer ${localStorage.getItem('token')}`,
    },
  };
  return [config];
};

export default useTokenConfig;

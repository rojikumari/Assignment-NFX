const Actions = {
  LOGIN: "SET_USER_STATE",
  SET_TOKEN: "SET_AUTH_TOKEN",
  LOGOUT: "SET_USER_LOGOUT"
};

export const incNumber = () => {
  return {
    type: "INCREMENT"
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT"
  };
};
export const resetNumber = () => {
  return {
    type: "RESET"
  };
};
export default Actions;

export const changeInput = (e, state, setState) => {
  const { id, value } = e.target;

  setState({ ...state, [id]: value });
};

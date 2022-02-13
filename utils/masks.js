export const maskTelephone = (e) => {
  const { value } = e.target;
  let a = value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return !a[2] ? a[1] : a[1] + " (" + a[2] + ")" + (a[3] ? " " + a[3] : "") + (a[4] ? "-" + a[4] : "") + (a[5] ? "-" + a[5] : "");
};

export const maskDate = (e) => {
  const { value } = e.target;
  let a = value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
  return !a[2] ? a[1] : a[1] + "." + a[2] + (a[3] ? "." + a[3] : "");
};

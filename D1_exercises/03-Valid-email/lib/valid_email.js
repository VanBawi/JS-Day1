const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  var invalidEmails = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return invalidEmails.test(String(email).toLowerCase());
};
module.exports = valid; // Do not remove.

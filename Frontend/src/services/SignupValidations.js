// frontend/src/services/SignupValidations.js
export function validateUsername(username) {
  if (!username) {
    return 'Username is required';
  }
  if (username.length < 3) {
    return 'Username must be at least 3 characters';
  }
  return '';
}

export function validatePassword(password) {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return '';
}

export function validatePasswordConfirmation(password, passwordConfirmation) {
  if (password !== passwordConfirmation) {
    return 'Passwords do not match';
  }
  return '';
}

  
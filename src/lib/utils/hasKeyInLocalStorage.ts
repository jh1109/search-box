const localStorageKeys = Object.keys(localStorage);

export const hasKeyInLocalStorage = (keyValue: string) => {
  for (let key of localStorageKeys) {
    if (!(key === keyValue)) {
      continue;
    }
    return true;
  }
  return false;
};

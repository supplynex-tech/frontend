export const storage = {
  setItem: (key: string, value: string) => {
      localStorage.setItem(key, value);
  },
  getItem: (key: string): string | null => {
      return localStorage.getItem(key);
  },
  deleteItem: (key: string) => {
      localStorage.removeItem(key);
  },
};
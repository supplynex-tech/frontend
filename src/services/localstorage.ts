export const storage = {
  setItem: async (key: string, value: string) => {
      localStorage.setItem(key, value);
  },
  getItem: async (key: string): Promise<string | null> => {
      return localStorage.getItem(key);
  },
  deleteItem: async (key: string) => {
      localStorage.removeItem(key);
  },
};
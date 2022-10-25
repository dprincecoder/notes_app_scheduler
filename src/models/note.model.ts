export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

export const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

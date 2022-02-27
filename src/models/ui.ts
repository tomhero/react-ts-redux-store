export type NotficationType = {
  status: 'error' | 'success' | 'pending';
  title: string;
  message?: string;
};

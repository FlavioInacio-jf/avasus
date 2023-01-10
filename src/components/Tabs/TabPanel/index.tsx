import { FC, ReactNode } from 'react';

export type TabPanelProps = {
  children: ReactNode;
  title: string;
};
export const TabPanel: FC<TabPanelProps> = ({ children }) => {
  return <div>{children}</div>;
};

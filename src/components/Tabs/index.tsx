import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  useState,
} from 'react';
import styles from './styles.module.scss';
import { TabPanelProps } from './TabPanel';

type ChildrenType = ReactElement<TabPanelProps | ReactElement<TabPanelProps>>;

type TabsProps = {
  children: ChildrenType | ChildrenType[];
};
export const Tabs: FC<TabsProps> = ({ children }) => {
  const tabs = Children.map(children, (c) => {
    if (!isValidElement<TabPanelProps>(c) || c.props['title'] === 'undefined') {
      throw new Error('child must have a title prop');
    }

    return c.props['title'];
  });

  const [currentTab, setCurrentTab] = useState<number>(0);
  const childrenArray = Children.toArray(children);

  const CurrentStepComponent = cloneElement(
    childrenArray[currentTab] as JSX.Element,
    { index: currentTab }
  );
  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
  };

  const styleIfCurrentTab = (index: number) => {
    const currentTabStyle =
      'after:content-[""] after:h-[3px] after:w-full after:bg-[#707070] after:block after:bottom-0 after:rounded-2xl after:mt-3';

    if (index === currentTab) return currentTabStyle;
    return '';
  };
  return (
    <div>
      <ul
        className={`flex text-lg font-semibold whitespace-nowrap scrollbar-hide  ${styles.nav}`}
      >
        {tabs.map((tab, index) => (
          <li
            key={`${tab}-${index}`}
            className={`mr-8 ${styleIfCurrentTab(index)} last:mr-0`}
          >
            <button type='button' onClick={() => handleChangeTab(index)}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {CurrentStepComponent}
    </div>
  );
};

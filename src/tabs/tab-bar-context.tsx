import * as React from 'react';

export type TabBarContextT = {
  onTabInteraction: (evt: any) => void;
  registerTab: (tab: any) => void;
  unregisterTab: (tab: any) => void;
  indicatorTransition: 'slide' | 'fade';
};

export const TabBarContext = React.createContext<TabBarContextT>({
  onTabInteraction: (evt: any) => {},
  registerTab: (tab: any) => {},
  unregisterTab: (tab: any) => {},
  indicatorTransition: 'slide'
});

export const withTabBarContext = () => <P extends {}>(
  Component: React.ComponentType<P & { contextApi?: TabBarContextT }>
): React.ComponentType<P & { contextApi?: TabBarContextT }> => (props: P) => (
  <TabBarContext.Consumer>
    {contextApi => <Component {...props} contextApi={contextApi} />}
  </TabBarContext.Consumer>
);

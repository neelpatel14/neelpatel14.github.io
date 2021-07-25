import React from 'react'
import {TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarNavigationIcon, TopAppBarActionItem, TopAppBarTitle} from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles'
const TopNavBar = () => (
  <TopAppBar>
    <TopAppBarRow>
      <TopAppBarSection alignStart>
        <TopAppBarNavigationIcon icon="menu" />
        <TopAppBarTitle>Neel Patel</TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection alignEnd>
        <TopAppBarActionItem icon="favorite" />
        <TopAppBarActionItem icon="star" />
        <TopAppBarActionItem icon="mood" />
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
)
export default TopNavBar;

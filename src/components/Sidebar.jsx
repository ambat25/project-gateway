import React from 'react'
import { Brand, MenuCell, MenuElement, SideNav } from './styled/sidenav';
import BrandLogo from '../assets/img/brand.png';
import BarChart from '../assets/img/bar-chart.png';
import DashboardIcon from '../assets/img/dashboard.png';
import ChartIcon from '../assets/img/chart.png';
import PieChartIcon from '../assets/img/pie-chart.png';
import PowerIcon from '../assets/img/power.png';

export default function Sidebar({ collapse }) {
  return (
    <SideNav collapseWidth={collapse ? 60 : 250}>
      <MenuElement>
        <Brand logo={BrandLogo} name='brand.com' />

        <MenuCell img={BarChart} title="Executive" />
        <MenuCell img={DashboardIcon} title="Dashboard" />
        <MenuCell img={ChartIcon} title="Department" />
        <MenuCell img={PieChartIcon} title="Report" />
        <MenuCell img={PowerIcon} title="Logout" />
      </MenuElement>
    </SideNav>
  )
}

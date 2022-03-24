import { useState } from 'react';
import "./assets/fontello/css/fontello.css";
import { Header } from './components/styled/header';
import { Layout } from './components/styled/layout';
import { Panel, PanelContainer, PanelFilters, PanelHeader } from './components/styled/panel';
import { Card } from './components/styled/card';
import { ProjectCard } from './components/ProjectCard';
import Sidebar from './components/Sidebar';
import { Box } from './components/styled/box';
import { Footer } from './components/styled/footer';
import { Select } from './components/styled/select';
import { DateInput } from './components/styled/date';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    amount: '1234',
  },
  {
    id: 2,
    title: 'Project 2',
    amount: '3412',
  },
]
function App() {
  const [collapse, setCollapse] = useState(true);
  const [openedProject, setOpenedProject] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [user] = useState({
    name: 'John Doe',
    image: 'https://ui-avatars.com/api/?name=John+Doe&background=F6CA65&color=FFF'
  });
  const [project, setProject] = useState('')
  const [gateway, setGateway] = useState('')

  return (
    <>
      <Layout collapse={collapse}>
        <Sidebar collapse={collapse} />
        <Panel>
          <Header
            collapse={collapse}
            toggle={() => setCollapse(!collapse)}
            user={user}
          />
          <PanelContainer>

          <Box pad="0 0 27px">
            <PanelHeader>
              <div className='report-title'>
                <h2>Reports</h2>
                <label>Easily generate a report of your transactions</label>
              </div>
                
              <PanelFilters>
                <Select
                  options={[
                    { label: 'All Projects', value: '' },
                    { label: 'All', value: '12' },
                  ]}
                  onChange={setProject}
                  value={project}
                />
                <Select
                  options={[
                    { label: 'All Gateways', value: '' },
                    { label: 'All', value: '12' },
                  ]}
                  onChange={setGateway}
                  value={gateway}
                />

                <DateInput
                  placeholder="Select Date"
                  onChange={setStartDate}
                  selected={startDate}
                  maxDate={endDate}
                />
                <DateInput
                  placeholder="End Date"
                  onChange={setEndDate}
                  selected={endDate}
                  minDate={startDate}
                />
              </PanelFilters>
            </PanelHeader>
          </Box>

            <Card color='#F1FAFE' pad="17px 19px 12px">
              <Box>
                <label>All projects | All gateways</label>
              </Box>
              <Box pad="17px" />
              {
                projects.map(prj => (
                  <ProjectCard
                    key={prj.id}
                    amount={prj.amount}
                    isOpened={openedProject === prj.title}
                    onToggle={() => setOpenedProject(openedProject === prj.title ? null : prj.title)}
                    title={prj.title}
                  />
                ))
              }

            </Card>

            <Box pad="13.5px 0px" />

            <Card color='#F1FAFE' pad="17px 19px 12px">
              <label>TOTAL: 14,065 USD</label>
            </Card>
          </PanelContainer>
          <Footer>
            <a href="http://www.ambat.dev">Terms&Conditions | Privacy policy</a>
          </Footer>
        </Panel>
      </Layout>
    </>
  );
}

export default App;

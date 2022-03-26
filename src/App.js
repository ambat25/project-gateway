import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/styled/header';
import { Layout } from './components/styled/layout';
import { Panel, PanelContainer, PanelFilters, PanelGrid, PanelHeader } from './components/styled/panel';
import { Card } from './components/styled/card';
import Sidebar from './components/Sidebar';
import { Box } from './components/styled/box';
import { Footer } from './components/styled/footer';
import { Select } from './components/styled/select';
import { DateInput } from './components/styled/date';
import { Button } from './components/styled/button';
import Chart, { ChartLabel } from './components/Chart';
import Empty from './components/Empty';
import Reports from './components/Reports';
import { numberWithCommas } from './utils';


function App() {
  const [collapse, setCollapse] = useState(true);
  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
    project: '',
    gateway: '',
  });
  const [selection, setSelection] = useState({
    startDate: null,
    endDate: null,
    project: '',
    gateway: '',
  });
  const [user] = useState({
    name: 'John Doe',
    image: 'https://ui-avatars.com/api/?name=John+Doe&background=F6CA65&color=FFF'
  });
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);

  const updateFilter = (key, value) => {
    setFilter(currentFilter => ({
      ...currentFilter,
      [key]: value
    }));
  }

  const projectOptions = useMemo(() => {
    return [
      { label: 'All Projects', value: '' },
      ...projects.map(prj => ({
        label: prj.name, value: prj.projectId
      }))
    ]
  }, [projects]);

  const indexedProjects = useMemo(() => {
    return projects?.reduce((acc, prj) => ({
      ...acc,
      [prj.projectId]: prj
    }), {})
  }, [projects]);

  const indexedGateways = useMemo(() => {
    return gateways?.reduce((acc, gtw) => ({
      ...acc,
      [gtw.gatewayId]: gtw
    }), {})
  }, [gateways]);

  const gatewayOptions = useMemo(() => {
    return [
      { label: 'All Gateways', value: '' },
      ...gateways.map(gtw => ({
        label: gtw.name, value: gtw.gatewayId
      }))
    ]
  }, [gateways]);

  const reportsBy = (key) => {
    return reports?.reduce((acc, cur) => ({
      ...acc,
      [cur?.[key]]: [...(acc?.[cur?.[key]] || []), cur]
    }), {})
  }


  const getChartBy = (key, indexer) => {
    const calculatedReport = reports?.reduce((acc, cur) => ({
      ...acc,
      [cur?.[key]]: (acc?.[cur?.[key]] || 0) + cur.amount
    }), {});

    return Object.keys(calculatedReport).sort((a, b) => indexer[a]?.name > indexer[b]?.name ? 1 : -1)
      .map(c => ({ id: c, name: indexer[c]?.name, value: +Number.parseFloat(calculatedReport[c]).toFixed(2) }))
  }

  const getSelection = () => {
    let labelTexts = [];
    labelTexts.push(indexedProjects[selection.project]?.name || 'All Projects');
    labelTexts.push(indexedGateways[selection.gateway]?.name || 'All Gateways');
    return labelTexts.join(' | ');
  }

  const fetchFrom = (route, cb) =>
    fetch(route).then(res => res.json()).then(res => cb(res.data))

  const fetchReport = () => {
    fetch('/report', {
      method: 'POST',
      body: JSON.stringify({
        "from": filter.startDate ? new Date(filter?.startDate).toISOString().split('T')[0] : '',
        "to": filter.endDate ? new Date(filter?.endDate).toISOString().split('T')[0] : '',
        "projectId": filter.project,
        "gatewayId": filter.gateway,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      setReports(res.data);
      setSelection({ ...filter });
    })
  }

  useEffect(() => {
    fetchFrom('/projects', setProjects);
    fetchFrom('/gateways', setGateways);
  }, []);

  const getTotal = () => {
    let currentReports = []

    if (selection.gateway && !selection.project) {
      currentReports = reportsBy('gatewayId')?.[selection.gateway]
    } else if (selection.project && !selection.gateway){
      currentReports = reportsBy('projectId')?.[selection.project] 
    } else {
      currentReports = Object.values(reports).flat();
    }
    const total = Number.parseFloat(currentReports?.reduce((acc, cur) => acc + (+cur.amount), 0) || 0).toFixed(2);
    return numberWithCommas(total);
  }

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
            <Box>
              <Box pad="0 0 27px">
                <PanelHeader>
                  <div className='report-title'>
                    <h2>Reports</h2>
                    <label>Easily generate a report of your transactions</label>
                  </div>

                  <PanelFilters>
                    <Select
                      options={projectOptions}
                      onChange={(val) => updateFilter('project', val)}
                      value={filter.project}
                    />
                    <Select
                      options={gatewayOptions}
                      onChange={(val) => updateFilter('gateway', val)}
                      value={filter.gateway}
                    />

                    <DateInput
                      placeholder="Select Date"
                      onChange={(val) => updateFilter('startDate', val)}
                      selected={filter.startDate}
                      maxDate={filter.endDate}
                    />
                    <DateInput
                      placeholder="End Date"
                      onChange={(val) => updateFilter('endDate', val)}
                      selected={filter.endDate}
                      minDate={filter.startDate}
                    />
                    <Box pad="0 0 0 12px">
                      <Button onClick={fetchReport}>
                        Generate report
                      </Button>
                    </Box>
                  </PanelFilters>
                </PanelHeader>
              </Box>
            </Box>
            {
              reports?.length <= 0 ? <Empty /> : (
                <PanelGrid>
                  <Box>
                    <Card color='#F1FAFE' pad="17px 19px 12px">
                      <Box>
                        <label>{getSelection()}</label>
                      </Box>
                      <Box pad="17px" />
                      {
                        selection.project && !selection.gateway ? (
                          <Reports
                            data={gateways}
                            keyId='gatewayId'
                            subKey="projectId"
                            keyTitle="Project"
                            indexer={indexedProjects}
                            reports={reportsBy('gatewayId')}
                          />
                        ): (
                          <Reports
                            data={projects}
                            keyId='projectId'
                            subKey="gatewayId"
                            keyTitle="Gateway"
                            indexer={indexedGateways}
                            reports={reportsBy('projectId')}
                          />
                        )
                      }

                    </Card>
                    {
                     ( (selection.project && selection.gateway) || (!selection.gateway  && !selection.project) )&& (
                        <>
                          <Box pad="13.5px 0px" />

                          <Card color='#F1FAFE' pad="17px 19px 12px">
                            <label>TOTAL: {getTotal()} USD</label>
                          </Card>
                        </>
                      )
                    }
                  </Box>
                  {
                    (selection.gateway || selection.project) && !(selection.gateway && selection.project) && (
                      selection.project ? (
                        <Box pad="0 0 0 30px">
                          <Card color='#F1FAFE' pad="17px 19px 12px">
                            <ChartLabel labels={getChartBy('gatewayId', indexedGateways)} />
                          </Card>
                          <Chart data={getChartBy('gatewayId', indexedGateways)} />
                          <Card color='#F1FAFE' pad="17px 19px 12px">
                            <label>TOTAL: {getTotal()} USD</label>
                          </Card>
                        </Box>

                      ) : (
                        <Box pad="0 0 0 30px">
                          <Card color='#F1FAFE' pad="17px 19px 12px">
                            <ChartLabel labels={getChartBy('projectId', indexedProjects)} />
                          </Card>
                          <Chart data={getChartBy('projectId', indexedProjects)} />
                          <Card color='#F1FAFE' pad="17px 19px 12px">
                            <label>TOTAL: {getTotal()} USD</label>
                          </Card>
                        </Box>
                      )

                    )
                  }
                </PanelGrid>
              )
            }
          </PanelContainer>
          <Footer>
            <a target="_blank" rel="noreferrer" href="http://www.ambat.dev">Terms&Conditions | Privacy policy</a>
          </Footer>
        </Panel>
      </Layout>
    </>
  );
}

export default App;

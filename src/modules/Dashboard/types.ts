export enum ViewType {
  OVERVIEW = "Overview",
  WORKFLOWS = "Workflows",
  JOB_BUILD = "Job build",
  JOB_DEPLOY = "Job deploy",
  JOB_TEST = "Job test",
}

export interface IOverviewParams {
  "from-date"?: string;
  "project-id"?: string;
  "to-date"?: string;
}

export interface ITestDataMore {
  "group-test-id"?: string;
  "image-id"?: string;
  "test-type"?: string;
}

export interface IOverviewData {
  buildDate: string;
  countFailBuild: number;
  countFailDeploy: number;
  countFailTest: number;
  countFailWorkFlow: number;
  countProject: number;
  countRelease: number;
  countSuccessBuild: number;
  countSuccessDeploy: number;
  countSuccessTest: number;
  countSuccessWorkFlow: number;
  countTotalTest: number;
  countWorkFlow: number;
  createdDate: string;
  duration: number;
  failTestPercent: number;
  imageName: string;
  ipStation: string;
  projectId: string;
  runDate: string;
  successTestPercent: number;
  countJobBuild: number;
  countJobTest: number;
  countJobDeploy: number;
}

export interface IReleaseRunning {
  baseImageId: string;
  buildDate: string;
  buildDuration: number;
  buildStatus: string;
  commitBy: string;
  createdBy: string;
  createdDate: string;
  deployDate: string;
  deployDuration: number;
  deployHistories: DeployHistory[];
  deploymentHistoryId: string;
  deploymentStatus: string;
  id: string;
  imageVersion: string;
  isDeploy: boolean;
  logPath: string;
  packageDuration: number;
  packageScriptId: string;
  packagingStatus: string;
  projectId: string;
  projectName: string;
  releaseHistoryModule: ReleaseHistoryModule[];
  releaseHistoryTarget: ReleaseHistoryTarget[];
  releaseId: string;
  releaseName: string;
  scriptId: string;
  status: number;
  targetVersion: string;
  testDuration: number;
  testStatus: string;
  tmpData: string;
  type: number;
}

export interface DeployHistory {
  duration: number;
  id: string;
  isAutoDeploy: number;
  log: string;
  releaseHistoryTargetId: string;
  script: string;
  scriptDeployDTOS: ScriptDeployDtos[];
  stationIp: string;
  status: number;
  testDuration: number;
  testFailCount: number;
  testGroupHistoryDTOS: TestGroupHistoryDtos[];
  testPassCount: number;
  testStatus: number;
}

export interface ScriptDeployDtos {
  errorString: string;
  scriptName: string;
  status: number;
}

export interface TestGroupHistoryDtos {
  cases: Case[];
  duration: number;
  id: string;
  imageId: string;
  imageVersion: string;
  releaseId: string;
  releaseName: string;
  stationIp: string;
  testBy: string;
  testCaseFail: number;
  testCasePass: number;
  testDate: string;
  testGroupId: string;
  testGroupName: string;
  testStatus: number;
  testType: number;
  totalTestCase: number;
}

export interface Case {
  duration: number;
  errorString: string;
  id: string;
  imageId: string;
  imageVersion: string;
  note: number;
  releaseId: string;
  releaseName: string;
  stationIp: string;
  testBy: string;
  testCaseId: string;
  testCaseName: string;
  testDate: string;
  testGroupHistoryId: string;
  testLog: string;
  testStatus: number;
}

export interface ReleaseHistoryModule {
  branch: string;
  buildBy: string;
  buildDate: string;
  commitBy: string;
  commitDate: string;
  commitId: string;
  duration: number;
  id: string;
  imageVersion: string;
  jenkinsJobId: number;
  logPath: string;
  moduleId: string;
  moduleName: string;
  projectId: string;
  releaseHistoryId: string;
  releaseNote: string;
  status: number;
  tmpData: string;
  version: string;
}

export interface ReleaseHistoryTarget {
  deploymentHistory: DeploymentHistory[];
  id: string;
  isParallelTest: boolean;
  ordinal: number;
}

export interface DeploymentHistory {
  duration: number;
  id: string;
  isAutoDeploy: number;
  log: string;
  releaseHistoryTargetId: string;
  script: string;
  scriptDeployDTOS: ScriptDeployDtos2[];
  stationIp: string;
  status: number;
  testDuration: number;
  testFailCount: number;
  testGroupHistoryDTOS: TestGroupHistoryDtos2[];
  testPassCount: number;
  testStatus: number;
}

export interface ScriptDeployDtos2 {
  errorString: string;
  scriptName: string;
  status: number;
}

export interface TestGroupHistoryDtos2 {
  cases: Case2[];
  duration: number;
  id: string;
  imageId: string;
  imageVersion: string;
  releaseId: string;
  releaseName: string;
  stationIp: string;
  testBy: string;
  testCaseFail: number;
  testCasePass: number;
  testDate: string;
  testGroupId: string;
  testGroupName: string;
  testStatus: number;
  testType: number;
  totalTestCase: number;
}

export interface Case2 {
  duration: number;
  errorString: string;
  id: string;
  imageId: string;
  imageVersion: string;
  note: number;
  releaseId: string;
  releaseName: string;
  stationIp: string;
  testBy: string;
  testCaseId: string;
  testCaseName: string;
  testDate: string;
  testGroupHistoryId: string;
  testLog: string;
  testStatus: number;
}

export interface IWorksFlowDashboard {
  countFail: number;
  countSuccess: number;
  dataChart: DataChart[];
  total: number;
}

export interface DataChart {
  buildDate: string;
  countFailBuild: number;
  countFailDeploy: number;
  countFailTest: number;
  countFailWorkFlow: number;
  countJobBuild: number;
  countJobDeploy: number;
  countJobTest: number;
  countProject: number;
  countRelease: number;
  countSuccessBuild: number;
  countSuccessDeploy: number;
  countSuccessTest: number;
  countSuccessWorkFlow: number;
  countTotalTest: number;
  countWorkFlow: number;
  createdDate: string;
  duration: number;
  failTestPercent: number;
  imageName: string;
  ipStation: string;
  projectId: string;
  runDate: string;
  successTestPercent: number;
}

export interface IJobTestData {
  countFail: number;
  countSuccess: number;
  jobTestFail: JobTestFail[];
  jobTestSuccess: JobTestSuccess[];
  total: number;
}

export interface JobTestFail {
  buildDate: string;
  countFailBuild: number;
  countFailDeploy: number;
  countFailTest: number;
  countFailWorkFlow: number;
  countJobBuild: number;
  countJobDeploy: number;
  countJobTest: number;
  countProject: number;
  countRelease: number;
  countSuccessBuild: number;
  countSuccessDeploy: number;
  countSuccessTest: number;
  countSuccessWorkFlow: number;
  countTotalTest: number;
  countWorkFlow: number;
  createdDate: string;
  duration: number;
  failTestPercent: number;
  imageName: string;
  ipStation: string;
  projectId: string;
  runDate: string;
  successTestPercent: number;
}

export interface JobTestSuccess {
  buildDate: string;
  countFailBuild: number;
  countFailDeploy: number;
  countFailTest: number;
  countFailWorkFlow: number;
  countJobBuild: number;
  countJobDeploy: number;
  countJobTest: number;
  countProject: number;
  countRelease: number;
  countSuccessBuild: number;
  countSuccessDeploy: number;
  countSuccessTest: number;
  countSuccessWorkFlow: number;
  countTotalTest: number;
  countWorkFlow: number;
  createdDate: string;
  duration: number;
  failTestPercent: number;
  imageName: string;
  ipStation: string;
  projectId: string;
  runDate: string;
  successTestPercent: number;
}

export interface IJobBuildData {
  mostFailCommitter: MostFailCommitter[];
  statusBuildCommitter: StatusBuildCommitter[];
}

export interface MostFailCommitter {
  countFailBuild: number;
  countSuccessBuild: number;
  lastCommitBy: string;
}

export interface StatusBuildCommitter {
  countFailBuild: number;
  countSuccessBuild: number;
  lastCommitBy: string;
}
export interface ITestDataMore {
  countTestE500: number;
  countTestUEFarm: number;
  countTestVHTK: number;
  id: string;
  testStatusDTOS: TestStatusDtos[];
  testStatusGroupDTOS: TestStatusGroupDtos[];
  totalTestCase: number;
}

export interface TestStatusDtos {
  duration: number;
  testCaseName: string;
}

export interface TestStatusGroupDtos {
  countTestCaseFail: number;
  countTestCasePass: number;
  countTestE500: number;
  countTestUEFarm: number;
  countTestVHTK: number;
  duration: number;
  groupName: string;
}


export interface VietnamMapProps {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect?: (code: number, state: string) => void;
  onHover: (code: number, state: string) => void;
  setOver: (code: number, state: string) => void;
  dataSample: ProvinceDataStyle[];
  rangesConfig: { range: number[]; color: string; label: string }[];
}

export interface ProvinceDataStyle {
  id: string;
  provincecode: number;
  tendonvithuthap: string;
  countmauthuthap: string;
  countfilethuthap: string;
  // percent: string
}

export interface RegionDataStyle {
  vungmien: number;
  count: string;
}

export interface Age {
  gioitinh: 1 | 2;
  duoi5tuoi: number;
  tu5den9tuoi: number;
  tu10den14tuoi: number;
  tu15den19tuoi: number;
  tu20tuoitrolen: number;
  tinhthanhid: number;
}

export interface DrugData {
  tenthuoc: string;
  avoid: number;
  nothing: number;
  normal: number;
}

export interface Drug {
  data: DrugData[];
  mauDaNhan: number | string;
  mauDangPhanTich: number | string;
  mauDaPhanTich: number | string;
}

export interface Diseases {
  tenbenh: string;
  nguycothap: number;
  nguycotrungbinh: number;
  nguycocao: number;
}

export type OverviewData = {
  tuoi: [Age, Age];
  thuoc: Drug;
  benh: Diseases[];
  thongkethuoc: number;
};

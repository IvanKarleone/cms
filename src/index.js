import './scss/main.scss';
import { Cms } from './core/Cms';
import { SideBar } from './components/side-bar/SideBar';
import { MainContent } from './components/main-content/MainContent';

const cms = new Cms('#root', [
  SideBar, MainContent
]);

cms.init();

import loadable from '@loadable/component';
const Lyc = loadable(() => import('../pages/Lyc/index'));
export const routeConfig= [
  {
    path:'/',
    exact:true,
    element: Lyc,
    routes:[]
  }
]
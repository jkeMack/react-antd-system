import App from '../App';
import UiDemo from '../pages/UiDemo';
import UserManage from '../pages/UserManage';
import RoleManage from '../pages/RoleManage';

const routes = [{
    path: '/',
    component: App, //当组件下有子组件的时候要特别注意
    routes: [
        // {
        //     path: '/home',
        //     component: Home,
        //     routes: [],
        // },
        {
            path: '/uiDemo',
            component: UiDemo
        },
        {
            path: '/userManage',
            component: UserManage
        },
        {
            path: '/roleManage',
            component: RoleManage
        },
    ],
}];

export default routes;
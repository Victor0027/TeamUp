// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import Start from "views/Start/Start.jsx";
import StatusProject from "views/StatusProject/StatusProject.jsx";
import CreateDemand from "views/CreateDemand/CreateDemand.jsx";
import ProjectsList from "views/ProjectsList/ProjectsList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
	{
		path: "/inicio",
		sidebarName: "Início",
		navbarName: "Informações Gerais",
		icon: Dashboard,
		component: Start
	},
	{
		path: "/projeto/status",
		sidebarName: "Projeto",
		navbarName: "Acompanhamento do Projeto",
		icon: Dashboard,
		component: StatusProject
	},
	{
		path: "/demanda",
		sidebarName: "Cadastrar Demanda",
		navbarName: "Demanda",
		icon: Person,
		component: CreateDemand
	},
	{
		path: "/projetos",
		sidebarName: "Lista de Projetos",
		navbarName: "Lista de Projetos",
		icon: "content_paste",
		component: ProjectsList
	},
	{
		path: "/typography",
		sidebarName: "Typography",
		navbarName: "Typography",
		icon: LibraryBooks,
		component: Typography
	},
	{
		path: "/icons",
		sidebarName: "Icons",
		navbarName: "Icons",
		icon: BubbleChart,
		component: Icons
	},
	{
		path: "/notifications",
		sidebarName: "Notifications",
		navbarName: "Notifications",
		icon: Notifications,
		component: NotificationsPage
	},
	{ redirect: true, path: "/", to: "/inicio", navbarName: "Redirect" }
];

export default dashboardRoutes;

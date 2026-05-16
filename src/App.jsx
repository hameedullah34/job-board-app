import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Homepage from "./Components/Homepage";
import Community from "./Components/Community";
import Messeges from "./Components/Messeges";
import Joboffer from "./Components/Joboffer";
import Notification from "./Components/Notification";
import Portfolio from "./Components/Portfolio";
import JobPage from "./Components/JobPage";
import ActualHome from "./ActualHome";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <ActualHome /> },
				{ path: "/portfolio", element: <Portfolio /> },
				{ path: "/joboffer", element: <Homepage /> },
				{ path: "/messeges", element: <Messeges /> },
				{ path: "/community", element: <Community /> },
				{ path: "/notification", element: <Notification /> },
				{ path: "/joboffer/:id", element: <JobPage /> },
			],
		},
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import {
  ImHome3,
  ImList,
  ImCart,
  ImCoinDollar,
  ImUser,
  ImPieChart,
  ImCogs,
  ImFolderOpen,
} from "react-icons/im";

export const NavBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <ImHome3 />,
  },
  {
    id: 2,
    label: "Products",
    route: "products",
    icon: <ImFolderOpen />,
  },
  {
    id: 8,
    label: "Categories",
    route: "categories",
    icon: <ImList />,
  },
  {
    id: 3,
    label: "Orders",
    route: "orders",
    icon: <ImCart />,
  },
  {
    id: 4,
    label: "Payments",
    route: "payments",
    icon: <ImCoinDollar />,
  },
  {
    id: 5,
    label: "Statistics",
    route: "statistics",
    icon: <ImPieChart />,
  },
  {
    id: 6,
    label: "Personal area",
    route: "personal area",
    icon: <ImUser />,
  },
  {
    id: 7,
    label: "Settings",
    route: "settings",
    icon: <ImCogs />,
  },
];

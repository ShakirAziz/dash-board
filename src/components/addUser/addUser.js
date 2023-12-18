// tabs.js
import CreateUserForm from "../CreateUserForm";
import UpdateUserForm from "../updateUserForm";
import DeleteUserForm from "../deleteUserForm";
import SearchUserForm from "../serachuserForm";

export const tabs = [
  { id: 1, label: "create user", component: <CreateUserForm /> },
  { id: 2, label: "update user", component: <UpdateUserForm /> },
  { id: 3, label: "delete user", component: <DeleteUserForm /> },
  { id: 4, label: "search user", component: <SearchUserForm /> },
];

// titlesAndDescriptions.js
export const titlesAndDescriptions = [
  {
    id: 1,
    title: "Add New User",
    description: "Create a brand new user and add them to this site.",
  },
  {
    id: 2,
    title: "Update User",
    description: "Here you can Update the data.",
  },
  {
    id: 3,
    title: "Delete User",
    description: "Here you can Delete the data.",
  },
  {
    id: 4,
    title: "Search User",
    description: "Here you can Search the data.",
  },
  // Add more title-description pairs as needed
];

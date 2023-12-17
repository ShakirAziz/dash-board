import "./styles.css";
const DashboardNavBar = ({ actionTab, setActionTab }) => {
  const handleClick = (index) => {
    setActionTab(index);
  };

  return (
    <>
      <ul className="navLinks">
        <li
          className={actionTab === 1 ? "activeNvaLink" : "navLink"}
          onClick={() => handleClick(1)}
        >
          create user
        </li>
        <li
          className={actionTab === 2 ? "activeNvaLink" : "navLink"}
          onClick={() => handleClick(2)}
        >
          update user
        </li>
        <li
          className={actionTab === 3 ? "activeNvaLink" : "navLink"}
          onClick={() => handleClick(3)}
        >
          delete user
        </li>
        <li
          className={actionTab === 4 ? "activeNvaLink" : "navLink"}
          onClick={() => handleClick(4)}
        >
          search user
        </li>
      </ul>
    </>
  );
};

export default DashboardNavBar;

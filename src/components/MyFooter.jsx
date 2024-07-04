const MyFooter = () => {
  const date = new Date();

  return (
    <footer
      className={`py-4 justify-content-center align-items-center d-flex flex-column bg-dark`}
    >
      <p className="container-xxl m-0 text-center small w-75 text-white">
        &copy; {date.getFullYear()} EpiBooks - Created with React by 🥷&nbsp;
      </p>
    </footer>
  );
};

export default MyFooter;

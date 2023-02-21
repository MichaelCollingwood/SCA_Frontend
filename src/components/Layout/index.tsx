import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;

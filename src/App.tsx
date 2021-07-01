interface titleProps {
  title: String;
}

const Title = ({ title }: any) => {
  return <h1>{title} from Title component</h1>;
};

const App = () => {
  return (
    <div>
      <Title title="Dobi & Goni" />
    </div>
  );
};
export default App;

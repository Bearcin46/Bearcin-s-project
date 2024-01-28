function Title(props) {
  return (
    <>
      <div className="bg-cover py-16 bg-norepeat bg-center bg-[url('https://img.freepik.com/premium-vector/technology-background-with-hitech-digital_29971-1126.jpg')]">
        <h1 className="text-6xl font-bold text-white text-center">
          {props.title}
        </h1>
      </div>
    </>
  );
}
export default Title;

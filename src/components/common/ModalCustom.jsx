const ModalCustom = ({ title, children }) => {
  console.log(children);
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <h3>Algo mas</h3>
    </div>
  );
};

export default ModalCustom;

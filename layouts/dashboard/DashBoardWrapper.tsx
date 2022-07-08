export interface DashBoardWrapperProps {}

const DashBoardWrapper: React.FC<DashBoardWrapperProps> = (props) => {


  return (
    <>
      <div className="bill-paymet-wrapper">
        <div className="bill-paymet-wrapper__card">
          <div className="__title_wrapper" >
             <h1 className="__title_wrapper__title">Dashboard</h1>
          </div>
          <div className="__break"></div>

        </div>
      </div>
    </>
  );
};

export default DashBoardWrapper;

import DesignServicesIcon from "@mui/icons-material/DesignServices";

function DesignProposal() {
  return (
    <div className="design-proposal mx-2 mb-5">
      <h1 className="title mb-3 border-bottom">プロジェクト案</h1>
      <h2>
        <DesignServicesIcon className="pe-1" sx={{ fontSize: 26 }} />
        実装以前のアイデア
      </h2>
      <div className="border mb-4 p-2">
        <img src="idea01.png" alt="idea01" className="w-100 mb-2 border" />
        <img src="idea02.png" alt="idea02" className="w-100 mb-2 border" />
        <img src="idea03.png" alt="idea03" className="w-100 mb-2 border" />
        <img src="idea04.png" alt="idea04" className="w-100 mb-2 border" />
        <img src="idea05.png" alt="idea05" className="w-100 mb-2 border" />
        <img src="idea06.png" alt="idea06" className="w-100 border" />
      </div>
      <h2>
        <DesignServicesIcon className="pe-1" sx={{ fontSize: 26 }} />
        TODOリスト（2023.02.03時点）
      </h2>
      <div className="border mb-4 p-2">
        <img src="todo01.png" alt="todo01" className="w-100 mb-2 border" />
        <img src="todo02.png" alt="todo02" className="w-100 mb-2 border" />
        <img src="todo03.png" alt="todo03" className="w-100 border" />
      </div>
      <h2>
        <DesignServicesIcon className="pe-1" sx={{ fontSize: 26 }} />
        ラフ画
      </h2>
      <div className="border p-2">
        <img
          src="rough_drawing-1.jpg"
          alt="rough_drawing-1"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-2.jpg"
          alt="rough_drawing-2"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-3.jpg"
          alt="rough_drawing-3"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-4.jpg"
          alt="rough_drawing-4"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-5.jpg"
          alt="rough_drawing-5"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-6.jpg"
          alt="rough_drawing-6"
          className="w-100 mb-2 border"
        />
        <img
          src="rough_drawing-7.jpg"
          alt="rough_drawing-7"
          className="w-100 mb-2 border"
        />
      </div>
    </div>
  );
}

export default DesignProposal;

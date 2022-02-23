import * as React from "react";
import { observer } from "mobx-react";
import { AppStore } from "../../store/AppStore";

const Header = observer(() => (
  <div className="bg-red-800 py-5">
    <div
      className={`max-w-7x1 grid grid-cols-${
        AppStore.showButtons ? 3 : 1
      } content-between`}
    >
      {AppStore.showButtons && (
        <button className="bg-gray-100 m-3 rounded-lg">Previous</button>
      )}
      <h1 className="text-3xl font-bold text-white">
        {AppStore.title || "No title found"}
      </h1>
      {AppStore.showButtons && (
        <button className="bg-gray-100 m-3 rounded-lg">Next</button>
      )}
    </div>
  </div>
));

export default Header;

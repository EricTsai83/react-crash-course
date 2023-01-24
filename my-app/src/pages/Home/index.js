// 透過 useState 可以讓 React 知道，該元素改了要重新 render
// 透過 useEffect 可以讓 React 偵測，當元素改變時，要執行給定的 function
// 透過 useRef 可以讓 React 定義一個永遠不變的值，不會被任何 render 影響
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  // useState: 裡面放預設值
  // setData: 作為一個 function，可以透過 setData(物件) 讓 data 改變成你要的物件
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  // 網頁初始化或是重心整理時，一定會先運行一次
  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  // 網頁初始化或是重心整理時，一定會先運行一次
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    // Edit 元件需要偵測新資料進來時將 state 改變
    // List 元件需要需要將ㄘ
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;

import { userState, useState } from "react";
import { v4 } from "uuid"; // 隨機產生 id

const Edit = ({ add, submittingStatus }) => {
  /*
  =========================================================================
  1. 用 useState 定義要監控的變數，當變數變更時，React 會知道要重新 render 結果
  2. 透過 html 元素的 onChange 屬性，讓 html 元素被改變時，執行給定的 JS function
     (這邊是對html元素的值重新賦值)
  =========================================================================
  */
  // 讓記事的 input 被監視，讓 input 變更時，React 會知道要重新 render 結果
  // 初始值為空字串
  const [note, setNote] = useState("");
  // 讓記事的 input 與這個 function 雙向綁定
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  // console.log(note, date, time);
  // 這裡寫的是當 button 被點擊後，會改變 Home 的 Data 元素
  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      return [{ id: v4(), note, date, time }, ...prevData]; // Edit 現在上面填的資料和之前新增的資料
    });
  }

  // 記事的部分會透過 note value 給值
  // 當元素內容改變時就觸發 onChange 事件來執行給定的 JavaScript 程式碼
  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;

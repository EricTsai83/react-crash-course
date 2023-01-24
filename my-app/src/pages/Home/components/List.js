import Item from "./Item"; // 讓 Item 依附在 list 上

// listData 和 deleteData 是從 Home 下的 index.js 傳入的
const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="List">
      {
        // 將 item 物件依序 render 出來
        listData.map((item) => {
          const { note, date, time, id } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note}
              date={date}
              time={time}
              deleteData={deleteData}
              submittingStatus={submittingStatus}
            />
          );
        })
      }
    </div>
  );
};

export default List;

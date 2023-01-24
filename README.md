# React
[Reference](https://zh-hant.reactjs.org/)

React 是一個陳述式、高效且具有彈性的 JavaScript 函式庫，用以建立使用者介面。它讓你使用小巧而獨立的「component」，來建立複雜的 UI。
## 透過 Create React App 來快速建立專案
Create React App 是一個適合學習 React 的環境，而且也是使用 React 建立一個全新的 single-page 應用程式的最佳方法。

```bash
npx create-react-app my-app  # create a project
cd my-app  # change directory
npm start # launch react 的 app
npm install uuid # 幫助快速產生 unique id
sudo npm install -g json-server # 用來模擬後端 API
```
在 root package.json 下新增

```json
	"scripts": {
		"prettier": "prettier -w src/",  // 代表所有 src 資料夾下的檔案都要用 prettier 格式化
		"server": "json-server --watch db.json"  // launch json-server  的語法
	}
```
透過以上修改，就可以下 `npm run prettier ` 與 `npm run server `


## 了解 React Hook
### 什麼是 Hook?
- 2019 年由React Team 發表，用來簡化 class 的寫法
- 目前沒右計畫廢除 class 的寫法，但 Hook 會是未來
- 很多公司都會以 Hook 作為主要開發的寫法，EX. Yahoo、17live、Binance、Tiktok

### 為什麼需要 Hook?
聽不懂，以後補

## 最重要的兩個 Hook
- useState、useEffect
- 用 Hook 賦予元件「狀態」、「效果」，例如：動態顯示碼表時間，簡單來講就是現在碼表的時間狀態是什麼，呈現的效果又該是什麼

```
碼表APP
元件：碼表的介面
狀態：變動的秒數
效果：因為秒數變動了，所以顯示出減少的樣子，或者做其他的事情等等
```

## 透過 JSX 語法來實現 UI 介面
[Reference](https://zh-hant.reactjs.org/docs/introducing-jsx.html)

底下是我們要完成的成品。可以看出會需要的元件有編輯元件、列表元件和列表裡的項目元件三種，可以分別用三個 js file 去寫

<img src="./Img/備忘錄.png " width = "450" height = "600" alt="備忘錄" align=center />

## 開發流程
1. 根據元件進行切版
2. 規劃備忘錄的數據流
	- 思考每一個元件的狀態
		- Home 元件的主要目的是用來 render Edit 和 List 最新的狀態
		- Edit 元件的目標有二
			- 接受介面給的 input，來更改介面顯示的狀態，並重新 render
			- 當按下 button 的時候，要能夠吐出一個含有多個 item 的物件，吐回給 Home
		- List 元件主要是去接 Edit 元件傳給 Home 的物件，將其 render 到介面上
3. 撰寫程式碼

```
	元件關係如下
	   Home
	 /      \
Edit        List
	           \ 
	           Item
```


## JSX 參考語法
```jsx
import { useState } from "react";
const [a, setA] = useState(100)  // useState 裡面放預設值  setData：作為一個 function 讓 data 改變
function plus() {
// setA 裡使用 function (prev) 可以得到準確上一輪的值，如果直接用 a + 200，
// 會倒致其他地方若也想用原本的 a 值，會因為 a 值已經改變而沒辦法使用
  setA(function (prev) {
    return prev + 200
  })
}
<button onClick={plus}>加法</button>
```




// <-------------app testing service section------------------------->
import { createGlobalStyle } from "styled-components";

const Testing = createGlobalStyle`
.work-main {
    width: 100%;
    height: 75vh;
    display: inline-block;
    position:relative;
    background:#14232e;
    margin-bottom:-7px;
  }
  .sec-a {
    background-color:darkcyan;
    right: 67%;
    top: 15%;
    height: 50vh;
  }
  .sec-b {
    background-color: rgb(150, 184, 95);
    right: 53%;
    height: 55vh;
    top: 13%;
  }
  .sec-c {
    background-color: darkcyan;
    right: 15%;
    height: 50vh;
    top: 15%;
  }
  .sec-d {
    background-color: rgb(150, 184, 95);
    right: 27%;
    height: 55vh;
    top: 13%;
  }
  .sec-e {
    background: rgb(165, 98, 98);
    right: 40%;
    height: 60vh;
    top: 10.5%;
  }
  .work-child {
    width: 20%;
    padding: 10px 20px;
    position: absolute;
  }
  .work-child h2{
    color:#0e47a1;
  }
  .work-child p{
    text-transform:capitalize;
    font-size:14px;
    padding:5% 10px;
    word-spacing: 10px;
  }
  .work-text-right{
      text-align:end;
  }
  .work-text-center{
      text-align:center;
  }
  .btn-work {
    width: 50%;
    display: block;
    border-radius:20px;
    position:absolute;
    bottom:10%;
    right:25%;
  }
`;
export default Testing;

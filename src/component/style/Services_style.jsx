import { createGlobalStyle } from 'styled-components';

const Service_style = createGlobalStyle`

/* ----------------------Services section---------------------- */

.main-services{
    wdth:100%;
    height:80vh;
    padding-left:5%;
    padding-top:10%;
    background:#ccc;
}

.main-services-heading{
    margin-left:20px;
    color:#000000 !importent;
    font-size:50px;
}

.main-services-devlopment{
    color: #fba62f;
}

.main-services-p{
    margin-top : 30px;
    line-height: 30px;
    font-size: 20px;
}

.inner-wraper{
    pading:10px 20px;
    background:#ccc;
    border-radius:20px;
    margin: 10px;
}

.service-team-title{
    color:#fba62f;
    font-weight:bold;
    font-size:22px;
}

.services-team-font{
    font-size:16px;
}

.sub-h2{
    margin-top: 25px;
    color: #f6a72f;
    font-size: 28px;
}

.service-content{
    background:#ccc;
    margin : 10px 0;
    border-radius:10px;
    text-align:center;
    padding:20px 0;
}

.services-icon{
    width: 100%;
    height: 70px;
}


@media only screen and ( max-width:980px) {
    .service-content{
        padding : 10px auto;
    }
    .main-services-p{
        font-size: 16px;
    }
}

`;
export default Service_style;
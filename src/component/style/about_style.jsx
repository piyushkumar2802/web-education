import { createGlobalStyle } from 'styled-components';

const about_style = createGlobalStyle`

/* ----------------------About style section---------------------- */
.main-about{
    margin:20px 0;
}
.about-heading{
    color:#fba62f;
    margin-top:40%;
}
.img-radius{
    border-radius:57px;
}
.about-head{
    background:#ccc;
    margin-top:20%;
    padding:50px;
    text-transform:capitalize;
    border-radius:20px;
}
.about-template{
    background:#ccc;
    margin:10px 0;
    padding:10px 20px;
    text-transform:capitalize;
}

@media only screen and ( max-width:980px) {
    .about-heading{
        margin-top:10%;
    }
    .about-head{
        margin-top:0%;
        margin:0 50px;
        border-radius:0;
    }
}

`;
export default about_style;
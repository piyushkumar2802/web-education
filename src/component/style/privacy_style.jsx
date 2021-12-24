import { createGlobalStyle } from 'styled-components';

const privacy_style = createGlobalStyle`
 .color{
     color:#34554 !importent;
 }
 .privacy-icon-logo{
     width:auto;
     height:150px;
     color:#ee514f;
 }
 .check-color{
     color:#fba62f;
 }
 .privacy-heading{
    height: 500px;
    padding-top: 125px;
 }
 @media only screen and ( max-width:980px)
{
    .privacy-icon-logo{
        position absolute;
        right: 40%;
    }

}
`;
export default privacy_style;
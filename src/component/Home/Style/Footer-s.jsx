// <-------------app testing service section-------------------------> 
import { createGlobalStyle } from 'styled-components';

const Testing = createGlobalStyle`

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer{
    background-color: #14232e;
    margin-top: 0;
    color: #e9ecef;;
}

.footer .footer-newsletter {
  padding: 50px 0;
  background: #f6f9ff;
  border-top: 1px solid #e1ecff;
}

.footer .footer-newsletter h4 {
  font-size: 24px;
  margin: 0 0 10px 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  color: #012970;
}

.footer .footer-newsletter form {
  margin-top: 20px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #e1ecff;
}

.footer .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 8px;
  width: calc(100% - 140px);
}

.footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 30px;
  margin: 3px;
  background: #4154f1;
  color: #fff;
  transition: 0.3s;
  border-radius: 4px;
}

.footer .footer-newsletter form input[type="submit"]:hover {
  background: #5969f3;
}

.footer .footer-top {
  background-size: contain;
  border-top: 1px solid #e1ecff;
  border-bottom: 1px solid #e1ecff;
  padding: 60px 0 30px 0;
}

@media (max-width: 992px) {
  .footer .footer-top {
    background-position: center bottom;
  }
}

.footer .footer-top .footer-info {
  margin-bottom: 30px;
}

.footer .footer-top .footer-info .logo {
  line-height: 0;
  margin-bottom: 15px;
}

.footer .footer-top .footer-info .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-top .footer-info .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ccc;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}

.footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Nunito", sans-serif;
}

.footer .footer-top .social-links a {
  font-size: 34px;
  display: inline-block;
  color: rgba(165, 7, 118, 0.5);
  line-height: 3;
  margin-right: 5%;
  margin-left: 5%;
  transition: 0.3s;
}

.footer .footer-top .social-links a:hover {
  color: #d6c8c8;
}

.footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  /* color: #012970; */
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-top .footer-links {
  margin-bottom: 30px;
}

.footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #d0d4fc;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-top .footer-links ul a {
  color: #e4eaec;
  transition: 0.3s;
  display: inline-block;
  font-size:18px;
  line-height: 1;
  text-decoration: none;
}

.footer .footer-top .footer-links ul a:hover {
  color: #4154f1;
}

.footer .footer-top .footer-contact p {
  line-height: 26px;
}

.footer .copyright {
  text-align: center;
  padding-top: 30px;
  color: #e2914e;
}

.footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
}
.footer-icon{
    color:#9e2929;
    margin-right: 5px;
}

.creater{
    color:rosybrown;
    font-size: 14px;
}
`;
export default Testing;
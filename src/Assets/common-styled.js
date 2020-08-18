import styled, { css } from "styled-components";
import {
  base_spacing,
  header_font_size,
  header_font_color,
  white_color,
  login_bg_color,
  secondary_font_color,
  ez_button_color
} from "./style-var";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import SignInBackgroundImg from "./img/SignInBackgroundImg.jpg";
import { makeStyles } from "@material-ui/core";

export const alignHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const alignCenter = css`
  ${alignHorizontally}
  align-items: center;
`;
export const flexColumn = css`
  ${alignCenter}
  flex-direction :column;
`;
export const Spacing1X = css`
  padding: ${base_spacing}px;
`;
export const Spacing1_5X = css`
  padding: ${base_spacing * 1.5}px;
`;

export const FontSize_20 = css`
  font-size: 20px;
`;

export const AlignItems = css`
  align-items: center;
  text-align: center;
`;

export const Margin_10 = css`
  margin: 10px;
`;

export const Login_SignUp_Button = styled.button`
    width : 300px;
    color: ${white_color};
    text-align: center;
    height: ${base_spacing*4}px;
    border:0;
    border-radius: 2px;
    margin-bottom: ${base_spacing *2}px;
    margin-left: ${base_spacing *3}px;
    cursor: pointer;
    opacity: 0.5;
    margin-top: inherit;
`;

export const LoginWrapper = styled.div`
  background-color: ${login_bg_color};
  padding: ${base_spacing * 2}px;
  display: flex;
  justify-content: space-around;
`;

export const PageWrapper = css`
  position: relative;
`;
export const PageHeader = css`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  font-weight: bold;
  font-size: ${header_font_size}px;
  color: ${header_font_color};
  text-align: center;
  text-transform: capitalize;
`;
export const Attached = css`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const Labels = css`
  font-weight: 500;
  font-size: 24px;
`;
export const StyledLink = styled(Link)`
  margin: ${base_spacing}px 0;
  padding-bottom: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  &[data-active] {
    color: black;
  }
`;

export const MCard = styled(Card)`
    margin:${base_spacing * 1.6}px;
    padding: ${base_spacing }px ${base_spacing * 1.6}px;
`;


export const LogInSignupPageMWrapper = styled.div`
    background: url(${SignInBackgroundImg});
    background-size: cover;
    position: relative;
    height: calc(100vh - 64px);
`;

export const LoginSignupOverlay = styled.div`
    position: fixed;
    top: 63px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(86, 204, 242, 0.8);;
`;

export const LogoDiv = styled.div`
    text-align: center;
    margin: ${base_spacing*2}px;
`;

export const EZLogo = styled.img`
    border-radius:50%;
`;

export const EZHeader = styled.h1`
    display: inline-block;
    padding-left :${base_spacing}px;
    font-size: ${base_spacing*3.5}px;
    vertical-align: 15px;
    font-weight: 600;
    letter-spacing: 5px;
    color: ${secondary_font_color};
`;


export const MobileActionButton = styled.button`
    width: 100%;
    height: ${base_spacing * 4}px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: 18px;
    outline: transparent;
`;


export const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%"
    },
  //   "&:first-child": {
  //     margin: `${base_spacing * 2}px`
  //   }

  },
  textField: {
    width: `calc(100% - ${base_spacing * 6}px)`,
    margin: `${base_spacing * 1.5}px ${base_spacing * 3}px !important`
  }
}));


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    overflow: scroll;
`;
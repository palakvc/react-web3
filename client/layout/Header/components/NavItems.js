import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const NavLink = styled.a`
  display: inline-flex;
  padding: 5px 0px;
  font-size: 14px;
  margin: 0 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  text-transform: capitalize;
  align-items: center;
  position: relative;
  transition: all ease 0.4s;
  cursor: pointer;
  &:last-child {
    margin: 0 0 0 15px;
  }
  
  svg {
    transition: all ease 0.4s;
  }
  &:before {
    transition: 300ms;
    height: 1px;
    content: "";
    position: absolute;
    width: 0%;
    bottom: 0px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    left: 0;
  }
  &.primary {
    // color: #1d293f;

    svg {
      path {
        stroke: #000000;
      }
    }
    &:before {
      // background: rgb(2,0,36);
      // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
      opacity: 0.6;
      background-image: linear-gradient(to top, #984df7, #3042ea);
    }
    &:hover {
      color: ${(props) => props.theme.colors.MainCl};
      color: #5918bd;
      &:before {
        width: 100%;
      }
      svg {
        path {
          stroke: ${(props) => props.theme.colors.MainCl};
          stroke: #5918bd;
        }
      }
    }
  }
  // &.active {
  //   color: #5918bd;
  //   position: relative;
  //   font-size: 16px;
  //   font-weight: 600;
  //   &::before {
  //     content: " ";
  //     position: absolute;
  //     width: 100%;
  //   }
  // }
  ${({ activee }) =>
    activee &&
    css`
      color:  #5918bd;
      position: relative;
      font-size: 16px;
      font-weight: 600;
      &::before {
        content: " ";
        position: absolute;
        width: 100%;
        linear-gradient(to top,#984df7,#3042ea);
        opacity: 0.6;
      }
  `}
  &.secondary {
    color: ${(props) => props.theme.colors.white};

    svg {
      transition: all ease 0.4s;
      path {
        stroke: #ffffff;
      }
    }

    &:before {
      background: ${(props) => props.theme.colors.primary};
    }
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      &:before {
        width: 100%;
      }
      svg {
        path {
          stroke: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    margin: 0 10px;
  }
  @media only screen and (max-width: 991px) {
    .content-hide {
      display: none;
    }
    .mobiledisable {
      display: none;
    }
  }
`;

const NavItems = ({
  path,
  disable,
  headerbackground,
  currentPage,
  icon,
  active,
  value,
}) => {
  return (
    <Link href={path} passHref>
      <NavLink activee={currentPage}
        aria-label={path}
        className={`${disable && "mobiledisable"} ${headerbackground} 
        
        `}
      >
        {icon}
        <span className={`itemname ${active && "content-hide"}`}>{value}</span>
      </NavLink>
    </Link>
  );
};

export default React.memo(NavItems);
// currentPage && ""
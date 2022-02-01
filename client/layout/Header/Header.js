import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import useSWR from "swr";
import { Item } from "@react-stately/collections";
import { Container } from "components/Container";
import NavItems from "./components/NavItems";
import { Button } from "components/Button";
import MenuButton from "components/Menu";
import { CartMenuButton, CartOrderItem } from "components/Cart";
import {
  RealImmerse,
  CartExternal,
  SearchExternal,
  MenuImg,
  Cancel,
  ProfileSettings,
  ProfileExperience,
  ProfileOrder,
  ProfileNotification,
  ProfileSignOut,
  ProfileUserIcon,
} from "icons";
import NotificationInfo from "components/Notification/NotificationInfo";
import { device } from "core/device";
import useUser from "lib/useUser";
import fetcher from "lib/fetchJson";
import { showMessage } from "store/snackbarSlice";
import { listing, removeAssetFromCart } from "store/cartSlice";
import newFetcher from "lib/fetcher";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#ffffff" : "transparent"};
  top: 0;
  transition: all ease 0.4s;
  // background-image: radial-gradient(circle at 50% 0,#5918bd,#1a1345);
  // background: transparent;
  z-index: 3;
`;
const MainLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &.secondary {
    svg {
      path {
        fill: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    width: 130px;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
`;
const CenterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  &.active {
    display: block;
    position: fixed;
    top: 81px;
    width: 250px;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    height: calc(100% - 70px);
    padding: 0px 0px;
    a {
      color: ${(props) => props.theme.colors.MainCl};
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      border-bottom: 1px dashed ${(props) => props.theme.colors.MainCl};
      margin: 0px;
      padding: 15px 10px;
      &:hover {
        background-color: ${(props) => props.theme.colors.MainCl};
        color: ${(props) => props.theme.colors.white};
        border-bottom: 1px dashed ${(props) => props.theme.colors.white};
      }
      &:before {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    top: 81px;
    height: calc(100% - 81px);
    transition: all ease 0.5s;
    display: block;
    position: fixed;
    width: 100%;
    left: -100%;
    z-index: 3;
  }
`;
const RightPortion = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;
const Menu = styled.a`
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  display: none;

  svg {
    color: #ffffff;
  }
  &:hover {
  }

  @media only screen and (max-width: 991px) {
    display: inline-flex;
    margin-right: 10px;
  }
`;
const MobileVisible = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
  }
`;
// const Mobiledisable = styled.div`
//   display: inline-flex;
//   align-items: center;
//   @media only screen and (max-width: 991px) {
//     display: none;
//   }
// `;
const RightNavItems = styled(NavItems)`
  font-weight: 600;
  color: #1d293f;
`;
const BlackWrapper = styled.div`
  position: fixed;
  height: calc(100% - 81px);
  width: 100%;
  left: -100%;
  top: 81px;
  content: " ";
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  &.active {
    left: 0;
  }
`;
const LogoWrap = styled.div`
  display: inline-flex;
`;
export const ItemIcon = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 35px;
  @media ${device.sm} {
    transform: scale(0.95);
  }
`;

const Header = ({ defaultColor, withBanner }) => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  const dispatch = useDispatch();
  const headerRef = React.useRef(null);
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(defaultColor);
  const { cartList } = useSelector(({ cart }) => cart);

  useEffect(() => {
    setIsScrolled(defaultColor);
  }, [defaultColor]);

  useEffect(() => {
    if (withBanner) {
      const scrollThreshold = headerRef?.current?.clientHeight || 80;
      function onScroll() {
        if (window.pageYOffset > scrollThreshold && !isScrolled) {
          setIsScrolled(true);
        } else if (window.pageYOffset < scrollThreshold && isScrolled) {
          setIsScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [isScrolled, withBanner]);

  const { data, error } = useSWR(
    user?.isLoggedIn ? ["cart/getCart", "GET", {}, user.auth.data.token] : null,
    newFetcher,
    {
      onSuccess: (data) => {
        dispatch(listing(data.data));
      },
    }
  );

  // useEffect(() => {
  //   if (user?.isLoggedIn) {
  //     fetcher("cart/getCart", "GET", {}, user.auth.data.token)
  //       .then((response) => {
  //         console.log("cart api called------", response.data);
  //         setCartListing(response.data.cartData);
  //       })
  //       .catch((error) => console.log("error in cart listing", error.response));
  //   }
  // }, [user?.auth?.data?.token, user?.isLoggedIn]);

  const removeFromCart = (assetId) => {
    fetcher(`cart/remove?id=${assetId}`, "GET", {}, user.auth.data.token)
      .then((response) => {
        console.log("response of remove asset from cart", response);
        dispatch(removeAssetFromCart(response.data._id));
      })
      .catch((error) => {
        console.log("err", error);
        dispatch(
          showMessage({
            message: error.response.message,
            description: "Please try agian!",
            type: "danger",
          })
        );
      });
  };

  const selectAction = (event) => {
    const userLogout = () => {
      mutateUser(fetcher("/api/logout", "POST", {}))
        .then(() => console.log("successfully user logged out"))
        .catch((error) => {
          console.error("error in internal logout api", error);
        });
    };
    switch (event) {
      case "personalSetting":
        return router.push("/user-profile/my-profile");
      case "experience":
        return router.push("/my-experience?page=1&limit=2");
      case "orderHistory":
        return router.push("/order-history?page=1&limit=2");
      case "notification":
        return router.push("/notification");
      case "signOut":
        return userLogout();
      default:
        return router.push("/user-profile/my-profile");
    }
  };

  return (
    <Wrapper
      color={isScrolled ? "withoutbackground" : "withbackground"}
      isScrolled={isScrolled}
      ref={headerRef}
    >
      <Container>
        {/* mobile close black wrapper start */}
        <MobileVisible>
          <BlackWrapper
            className={navbar && "active"}
            onClick={() => setNavbar(!navbar)}
          />
        </MobileVisible>
        {/* mobile close black wrapper End */}

        <InnerWrapper>
          <LogoWrap>
            <Menu onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <Cancel color={isScrolled ? "#000000" : "#ffffff"} />
              ) : (
                <MenuImg color={isScrolled ? "#000000" : "#ffffff"} />
              )}
            </Menu>
            <MainLogo onClick={() => router.push("/")}>
              <RealImmerse color={isScrolled ? "#000000" : "#ffffff"} />
            </MainLogo>
          </LogoWrap>
          <CenterWrapper
            className={`navbar ${navbar && "active"} ${
              isScrolled ? "primary" : "secondary"
            }`}
          >
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="Products"
              path="/product/Browser"
              currentPage={router.pathname.startsWith("/product")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="Features"
              path="/features"
              currentPage={router.pathname.startsWith("/features")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="Experiences"
              path="/experience?page=1&limit=9"
              currentPage={router.pathname.startsWith("/experience")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="pricing"
              path="/pricing"
              currentPage={router.pathname.startsWith("/pricing")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="Blog"
              path="/blog"
              currentPage={router.pathname.startsWith("/blog")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="FAQs"
              path="/faq"
              currentPage={router.pathname.startsWith("/faq")}
            />
            <NavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              value="About "
              path="/about"
              currentPage={router.pathname.startsWith("/about")}
            />
          </CenterWrapper>
          <RightPortion
            className={isScrolled ? "withbackground" : "withoutbackground"}
          >
            {/* <RightNavItems
              headerbackground={isScrolled ? "primary" : "secondary"}
              icon={<SearchExternal />}
              active={true}
              // value="Search"
              path="/search"
            /> */}
            <CartMenuButton
              aria-label="CartMenue"
              label="Cart"
              color={isScrolled ? "primary" : "secondary"}
              icon={<CartExternal />}
              cartListing={cartList}
              // onAction={selectAction}
            >
              {cartList?.map((cartItem) => (
                <Item key={cartItem._id} textValue={cartItem.assetsData}>
                  <CartOrderItem
                    id={cartItem._id}
                    imgUrl={cartItem.thumbnailImage}
                    publisher={cartItem.publisher}
                    itemname={cartItem.assetsData}
                    price={cartItem.price}
                    removeFromCart={removeFromCart}
                  />
                </Item>
              ))}
            </CartMenuButton>
            {!user?.isLoggedIn === false ? (
              <MenuButton
                aria-label="menu"
                label={user.auth.data.name}
                profileImage={user.auth.data.profileImage}
                // icon={<ProfileUserIcon />}
                onAction={selectAction}
                color={isScrolled ? "primary" : "secondary"}
              >
                <Item key="personalSetting" textValue="Personal Setting">
                  <ItemIcon>
                    <ProfileSettings />
                  </ItemIcon>
                  Personal Setting
                </Item>
                <Item key="experience" textValue="My Experience">
                  <ItemIcon>
                    <ProfileExperience />
                  </ItemIcon>
                  {"My Experience's"}
                </Item>
                <Item key="orderHistory" textValue="Order History">
                  <ItemIcon>
                    <ProfileOrder />
                  </ItemIcon>
                  Order History
                </Item>
                <Item key="notification" textValue="Notification">
                  <ItemIcon>
                    <ProfileNotification />
                  </ItemIcon>
                  Notification
                </Item>
                <Item key="signOut" textValue="Sign Out">
                  <ItemIcon>
                    <ProfileSignOut />
                  </ItemIcon>
                  Sign Out
                </Item>
              </MenuButton>
            ) : user?.isLoggedIn === false && user.isLoggedIn !== null ? (
              <>
                <RightNavItems
                  headerbackground={isScrolled ? "primary" : "secondary"}
                  value="login"
                  path="/login"
                />
                {/* mobile signup Hide start */}
                <RightNavItems
                  headerbackground={isScrolled ? "primary" : "secondary"}
                  value="SignUp"
                  path="/signup"
                />
                {/* <Mobiledisable>
                  <Button
                    variant="outlined"
                    color={isScrolled ? "#000000" : "white"}
                    borderColor="#09e000"
                    radius="lightRound"
                    px="4"
                    py="3"
                    onClick={() => router.push("/signup")}
                  >
                    Sign up
                  </Button>                  
                </Mobiledisable> */}
              </>
            ) : (
              <p style={{ color: "white" }}>loading...</p>
            )}
            {/* mobile signup Hide End */}
          </RightPortion>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default React.memo(Header);

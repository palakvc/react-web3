import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Cell, Grid } from "styled-css-grid";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import { device } from "core/device";
import { P, Description, Subtitle } from "components/Typography";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { LinkedIn, Facebook, Twitter } from "icons";

const Main = styled.footer`
  background-image: linear-gradient(to right, #5918bd, #1a1345);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    background: #ffd166;
    width: 250px;
    height: 250px;
    bottom: -130px;
    left: -130px;
    border-radius: 50%;
  }
  &:after {
    position: absolute;
    content: "";
    background: #37def5;
    width: 130px;
    height: 130px;
    top: 25px;
    right: -80px;
    border-radius: 50%;
  }
  .gridContent {
    padding: 125px 0;
  }
  .list {
    margin-bottom: 15px;
  }
  .description {
    max-width: 270px;
    margin: 20px 0 25px;
  }
  .contact-info {
    margin: 0;
  }
  @media ${device.lg} {
    .gridContent {
      grid-gap: 8px;
    }
    .description {
      max-width: 100%;
    }
  }
  @media ${device.md} {
    .gridContent {
      padding: 50px 0;
    }
  }
  @media ${device.xs} {
    &:before {
      width: 200px;
      height: 200px;
    }
    .description {
      max-width: 260px;
    }
  }
`;
const ListTitle = styled(Subtitle)`
  margin-bottom: 20px;
`;
const SocialFooter = styled.div`
  position: relative;
  bottom: 0;
`;
const Hr = styled.hr`
  border: 1px solid #313d55;
`;
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  p {
    font-size: 13px;
  }
  .social-icons {
    display: flex;
    a {
      margin-left: 15px;
      cursor: pointer;
    }
  }
  @media ${device.xs} {
    flex-wrap: wrap;
    justify-content: center;
    .social-icons{
      margin-top: 10px;
    }
  }
`;

function Footer() {
  const router = useRouter();
  return (
    <Main>
      <Container>
        <Grid
          className="gridContent"
          columns="repeat(auto-fit, minmax(70px, 1fr))"
        >
          <Cell width={4} className="column">
            <Image src={logo} alt="Logo" width={176} height={40} />
            <Description
              color="white"
              className="description"
              lineHeight="description"
            >
              The world without limits! Experience immersive virtual reality
              without any hassle.
            </Description>
            <Button
              variant="primary"
              radius="lightRound"
              px="3"
              py="2"
              fontSize="body"
              lineHeight="smallest"
              onClick={() => router.push("/ri-support")}
            >
              Ask Question
            </Button>
          </Cell>
          <Cell width={8} className="column">
            <Grid columns="repeat(auto-fit, minmax(50px, 2fr))">
              <Cell width={3}>
                <ListTitle color="greyOpacity" weight="semiBold">
                  Let us help you
                </ListTitle>
                <Link href="/pricing">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Pricing Plan
                    </Description>
                  </a>
                </Link>
                <Link href="/feedback">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Feedback
                    </Description>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Publisher Login
                    </Description>
                  </a>
                </Link>
              </Cell>
              <Cell width={3}>
                <ListTitle color="greyOpacity" weight="semiBold">
                  Real Immerse Store
                </ListTitle>
                <Link href="/user-profile/my-profile">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Account Profile
                    </Description>
                  </a>
                </Link>
                <Link href="/experience?page=1&limit=9">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Download Center
                    </Description>
                  </a>
                </Link>
                <Link href="/whats-new?version=3.0.29">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      What’s New?
                    </Description>
                  </a>
                </Link>
                <Link href="/my-experience?page=1&limit=2">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      My Experience’s
                    </Description>
                  </a>
                </Link>
                <Link href="/order-history?page=1&limit=2">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Order History
                    </Description>
                  </a>
                </Link>
              </Cell>
              <Cell width={3}>
                <ListTitle color="greyOpacity" weight="semiBold">
                  Company
                </ListTitle>
                <Link href="/about">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      About Us
                    </Description>
                  </a>
                </Link>
                <Link href="/careers">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Careers
                    </Description>
                  </a>
                </Link>
                <Link href="/blog">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Blog
                    </Description>
                  </a>
                </Link>
                <Link href="/privacy-ri/policy">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Privacy at RI
                    </Description>
                  </a>
                </Link>
                <Link href="/investor">
                  <a>
                    <Description
                      color="whiteLignt"
                      lineHeight="description"
                      className="list"
                    >
                      Investor
                    </Description>
                  </a>
                </Link>
              </Cell>
              <Cell width={3}>
                <ListTitle color="greyOpacity" weight="semiBold">
                  Contacts
                </ListTitle>
                <a>
                  <Description
                    color="whiteLignt"
                    lineHeight="description"
                    className="list"
                  >
                    Feel free to get in touch with us via phone or send us a
                    message.
                  </Description>
                </a>
                <Description color="yellow" className="contact-info">
                  +91 84889 64723
                </Description>
                <Link href="/">
                  <a>
                    <Description
                      color="yellow"
                      className="contact-info"
                      lineHeight="description"
                    >
                      support@realimmerse.app
                    </Description>
                  </a>
                </Link>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
        <SocialFooter>
          <Hr />
          <Social>
            <P color="white">© Real Immerse 2021, All Rights Reserved</P>
            <div className="social-icons">
              <Link href="https://twitter.com/ViitorCloud">
                <a aria-label="twitter">
                  <Twitter color="white" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/ViitorCloud">
                <a aria-label="facebook">
                  <Facebook color="white" />
                </a>
              </Link>
              <Link href="https://in.linkedin.com/company/viitorcloud">
                <a aria-label="linkedIn">
                  <LinkedIn />
                </a>
              </Link>
            </div>
          </Social>
        </SocialFooter>
      </Container>
    </Main>
  );
}

export default Footer;

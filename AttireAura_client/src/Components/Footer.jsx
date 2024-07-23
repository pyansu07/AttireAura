import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import MailOutline from "@mui/icons-material/MailOutline";
import Phone from "@mui/icons-material/Phone";
import Pinterest from "@mui/icons-material/Pinterest";
import Room from "@mui/icons-material/Room";
import Twitter from "@mui/icons-material/Twitter";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #222;
  color: #fff;
  padding: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #fff;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #ccc;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #fff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #ccc;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #ccc;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>@pyansu_nahak</Logo>
        <Desc>
          Free Delivery in select regions | Multiple Payment Methods | Warranty for peace of mind | Dedicated Customer Support
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Support Center</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of service</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Blog</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />Nagpur, Maharashtra
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 XXXX-XXXX-XX
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />pyansu.07@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

import Send from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  height:50vh;
  background-color: #f7e7dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #333;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #555;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 100%; 
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 5px;
  overflow: hidden;
  padding: 0 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 18px;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #6b7b7b;
  color: white;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  &:hover {
    background-color: #5a6a6a;
  }
`;

const RightImage = styled.img`
  width: 45%;
  height: 109%;
  border-radius: 10px;
`;

const Newsletter = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Join our Newsletter</Title>
        <Desc>Drop your email below to get updates about us, latest news, tips, and more!</Desc>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </LeftContainer>
      {/* <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer"> */}
        <RightImage src="https://images.pexels.com/photos/305832/pexels-photo-305832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Newsletter Image" />
      {/* </a> */}
    </Container>
  );
};

export default Newsletter;

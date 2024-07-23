import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #333;
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  flex: 1;
  margin: 10px;
  max-width: 240px;
  min-width: 200px;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 15px;
  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-size: 16px;
  color: #555;
`;

const SimilarProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await publicRequest.get(`/products?category=${category}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (category) {
      fetchSimilarProducts();
    }
  }, [category]);

  return (
    <Container>
      <Title>Similar Products</Title>
      <ProductsWrapper>
        {products.map((item) => (
          <ProductCard key={item._id}>
            <Link to={`/product/${item._id}`}>
              <Image src={item.img} alt={item.title} />
              <Info>
                <ProductTitle>{item.title}</ProductTitle>
                <Price>$ {item.price}</Price>
              </Info>
            </Link>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </Container>
  );
};

export default SimilarProducts;

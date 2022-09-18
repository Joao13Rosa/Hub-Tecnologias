import styled from "styled-components";

export const DivGeral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #ff577f;
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 1rem;
  }
`;

export const FormLogin = styled.form`
  width: 90%;
  height: 502px;
  border-radius: 5px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  justify-content: center;
  align-items: center;

  h2 {
    color: #f8f9fa;
    font-size: 25px;
    font-weight: 800;
    line-height: 28px;
  }

  p {
    color: #f8f9fa;
    font-size: 12px;
    line-height: 18px;
    margin-top: 1rem;
  }

  input {
    width: 90%;
    height: 48px;
    top: 28.79px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;
    gap: 10.15px;
  }

  button {
    width: 92%;
    height: 48px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;
    background-color: #ff577f;
    color: white;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
  }

  label {
    margin-left: -83%;
    color: #f8f9fa;
    font-size: 12.18px;
    font-weight: 400;
    margin-top: 2rem;
  }

  span {
    color: white;
    font-size: 12px;
    border-bottom: 1px solid white;
    padding-top: 4px;
  }
`;

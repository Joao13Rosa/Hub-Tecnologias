import styled from "styled-components";

export const DivGeral = styled.div`
  background-color: #121214;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media screen and (min-width: 900px) {
    height: 100vh;
  }
`;

export const DivTitulo = styled.div`
  width: 90%;
  max-width: 450px;
  height: 3rem;
  background-color: #121214;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  h1 {
    color: #ff577f;
    font-size: 20px;
    font-weight: bolder;
  }

  button {
    background-color: #212529;
    border: none;
    border-radius: 4px;
    width: 4.5rem;
    height: 2rem;
    color: #f8f9fa;
    font-size: 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 1.5rem;
  }
`;

export const DivForm = styled.div`
  width: 90%;
  height: fit-content;
  border-radius: 5px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  overflow: auto;

  h2 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-top: 0.5rem;
  }

  p {
    color: #868e96;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }

  form {
    width: 90%;
    border-radius: 5px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    justify-content: center;
    align-items: flex-start;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: #343b41;
    color: #868e96;

    border: none;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;
    background-color: #ff577f;
    color: white;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border: none;
  }

  select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: #343b41;
    color: #868e96;
  }

  label {
    color: #f8f9fa;
    font-size: 12px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: none;
  }

  span {
    color: white;
    font-size: 12px;
    border-bottom: 1px solid white;
    padding-top: 1px;
  }
`;

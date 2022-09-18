import styled from "styled-components";

export const DivGeral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTitulo = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #868e96;

  div {
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    color: #ff577f;
    font-size: 25px;
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
`;

export const DivTexto1 = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #868e96;

  div {
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  p {
    color: #868e96;
    font-weight: 600px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const DivTexto2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  div {
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 700px;
    overflow-y: auto;
    background-color: #212529;
    margin-top: 1rem;
    border-radius: 4px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LiTechs = styled.li`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  background-color: #121214;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 5rem;
  padding: 0 0.5rem 0 0.5rem;
  border-radius: 5px;

  .divLi2 {
    max-width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .divLi1 {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ButtonCriar = styled.button`
  background-color: #212529;
  border: none;
  border-radius: 2px;
  height: 30px;
  width: 30px;
  color: white;
  cursor: pointer;
`;

export const ButtonDelete = styled.button`
  background-color: #212529;
  border: none;
  border-radius: 2px;
  height: 30px;
  width: 30px;
  color: white;
  cursor: pointer;
`;

export const DivGeralForm = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const DivForm1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  box-sizing: border-box;

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const DivForm2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: 100%;
    height: 48px;
    background-color: #ff577f;
    color: white;
    border: none;
    border-radius: 4px;
  }

  input {
    width: 97%;
    height: 48px;
    border-radius: 4px;
    background-color: #343b41;
    color: white;
    border: none;
  }

  select {
    width: 100%;
    height: 48px;
    background-color: #343b41;
    color: white;
    border: none;
    border-radius: 4px;
  }

  label {
    font-weight: 400;
    font-size: 12.18px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const DivModalCad1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

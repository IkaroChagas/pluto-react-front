import styled from "styled-components";

export const Table = styled.table`
  margin: auto;
  width: 100%;
  margin-top: 20px;
  border: 1px solid #00C172;
  border-collapse: collapse;
`;

export const th = styled.th`
  border: none;
  padding: 15px;
  border-left: 1px solid #00C172;
  border-right: 1px solid #00C172;
  text-align: left;
  color: #666;
  background-color: #f2f2f2;
`;

export const td = styled.td`
  border-top: 1px solid #00C172;
  border-bottom: 1px solid #00C172;
  padding: 8px;
`;


export const tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const tbody = styled.tbody`
  display: flex;
`;

export const Image = styled.img`
  width: 120px;
  height: auto;
`;

export const IconImage = styled.img`
  width: 20px;
  border: 0;
  padding: 4px;
  margin-right: 8px;
`;

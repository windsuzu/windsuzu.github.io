import React, { ReactNode } from "react";
import styled from "styled-components";

const TakeawayFieldSet = styled.fieldset`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TakeawaysLegend = styled.legend`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-family: "ink free";
  color: #476098;
`;

const TakeawaysList = styled.ul`
  width: 100%;
  word-wrap: break-word;
  li::marker {
    content: "📝 ";
  }
  li {
    margin-bottom: 0.8rem;
  }
`;

export const Takeaway = ({ points }: { points: ReactNode[] }) => (
  <TakeawayFieldSet>
    <TakeawaysLegend>Key Takeaways</TakeawaysLegend>
    <TakeawaysList>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </TakeawaysList>
  </TakeawayFieldSet>
);

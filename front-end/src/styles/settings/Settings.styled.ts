import styled from 'styled-components';

const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  overflow: auto;
  color: #fff;
  li {
    list-style: none;
  }

  display: flex;
  gap: 50px;
  flex-direction: column;
`;

const SettingsLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 40px;
  li {
    cursor: pointer;
    color: #a0a0a0;
    font-weight: 600;
    border-bottom: 1px solid #a0a0a0;
  }
`;

const SettingsHeader = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 600;
    color: #a0a0a0;
  }
`;

export { SettingsContainer, SettingsLinks, SettingsHeader };

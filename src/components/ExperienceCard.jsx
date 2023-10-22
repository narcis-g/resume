import styled from 'styled-components'


const ExperienceCard = () => {
  return (
    <Container>
      <SpacedColumn>
        <Title>Developer</Title>
        <Period>Yesterday-Today</Period>
      </SpacedColumn>
      <SpacedColumn>
        <Company>
          <CompanyLogo src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"></CompanyLogo>
          <CompanyName>Comp Inc</CompanyName>
        </Company>
        <Location>Romania</Location>
      </SpacedColumn>
      <BulletPoints>
        <Point>Programing</Point>
        <Point>Programing</Point>
        <Point>Programing</Point>
        <Point>Programing</Point>
      </BulletPoints>
      
    </Container>
  )
}

export default ExperienceCard;


const Container = styled.div`
  display: flex;
  width: 370px;
  padding: 31px 24.5px 31px 26px;
  margin-left: -26px;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  border: 3px solid #211814;
  background: #FFF;
  box-shadow: 15px 15px 0px 0px #3DC39B;
`;

const SpacedColumn = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

const Title =styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Period =styled.span`
  color: #595959;
  text-align: right;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const Company = styled.div `
 display: flex;
 flex-direction: row;
 gap: 8px;
 align-items: center;
 
`;

const CompanyName =styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const CompanyLogo = styled.img`
  width: 32px;
  height: 31.979px;
  flex-shrink: 0;
`;

const Location = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BulletPoints = styled.ul `
  columns: 2;
`;

const Point = styled.li`  
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;
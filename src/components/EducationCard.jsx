import styled from 'styled-components'

const EducationCard = (props) => {

  return (
    <Container>
          <Period>{props.start} - {props.end}</Period>
          <CompanyName>{props.companyName}</CompanyName>
          <Learned>{props.learned}</Learned>
    </Container>
  )
}

export default EducationCard;

const Container = styled.div`
  display: inline-flex;
  padding: 21px 55px 22px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  width:200px;
  height:80px;
  margin-left:43px;
  margin-top:23px;
  
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
`;

const SpacedColumn = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

const Period = styled.span`
  color: #595959;
  text-align: right;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 
`;

const CompanyName = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Learned = styled.span`
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
import styled from 'styled-components'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div>
      <Title>Education</Title>
      <EducationList>
        <EducationCard
          start="2023"
          end="2024"
          companyName="Software company"
          learned="Front-End Developer Program"
          />
        <EducationCard
          start="2020"
          end="2023"
          companyName="Universitate"
          learned="Informatică Inginerie"
          />
      </EducationList>
      
    </div>
  )
}

export default Education;

const Title = styled.div`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left:43px;
  margin-top:30px;

`

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`


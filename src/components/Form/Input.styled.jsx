import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 12px 16px;
  outline: none;
  background-color: #fff;
  
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;
  height: 40px;
  color: #9b9faa;
  overflow: hidden;
  margin-bottom: 40px;  

  & input {
    width: 100%;
    height: 100%;
    color: #9B9FAA;
    padding-top: 20px;
    border: none;
    background-color: #fff;

    &:focus
    
  }
  & label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
  }
  & label::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    transition: all 0.3s ease;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  color: #9b9faa;
  padding-top: 20px;
  border: none;
  background-color: #fff;

  &:focus {
    outline: none;
  }
  &:focus + .labelName .contentName,
  &:valid + .labelName .contentName {
    transform: translateY(-100%);
    font-size: 10px;
    left: 0px;
    color: #9B9FAA;
  }
`;

export const LabeForInput = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid white;
 
`;

export const LabelInfo = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
  font-size: 14px;
`;

import styled from 'styled-components';

function Button(props) {
  const {children, ...rest} = props;
  return <Btn {...rest}>{children}</Btn>;
}

export default Button;

const Btn = styled.button`
  background-color: ${({background}) => background};
  height: ${({height}) => height};
  width: ${({width}) => width};
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
  :hover {
    background-color: ${({hoverColor}) => hoverColor};
    cursor: ${({cursor}) => cursor};
  }
`;

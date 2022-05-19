import styled from '@emotion/styled';

const Main = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #161616;
  overflow: hidden;
`;

const StarField = styled.div`
  user-select: none;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: fadein 15s;
`;

const Star = styled.span`
  position: fixed;
  top: -450%;
  left: 0;
  height: 1000%;
  width: 100%;

  background-size: 200px 200px;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      #ccc,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 20px 50px, #fbf5f3, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 30px 100px, #fbf5f3, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 60px, #fbf5f3, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 110px 90px, #fbf5f3, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 150px, #fbf5f3, rgba(0, 0, 0, 0));
  background-repeat: repeat;

  transform-origin: 50% 50%;
  animation-name: starfieldRotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  animation-duration: 300s;

  @keyframes starfieldRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const MainBackground = () => {
  return (
    <>
      <Main>
        <StarField>
          <Star></Star>
        </StarField>
      </Main>
    </>
  );
};

export default MainBackground;

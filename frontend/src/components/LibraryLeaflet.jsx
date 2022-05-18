import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import bg from '@/assets/img/library/img-tablewood.jpg';
import '@/assets/img/library/main.css';
import { getBooks } from '@/api/library';
import LibraryDetailDialog from '@/components/LibraryDetailDialog';

const LeafletBox = styled.div`
  perspective: 1500px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30vw;
  height: 30vw;
  margin: auto;
  z-index: 100;
  transform-style: preserve-3d;
`

const Leaflet3D = styled.div`
  margin: auto;
  height: 100%;
  transition: 1s;
  z-index: 100;
  animation: start-ani 1s forwards;
  @keyframes start-ani {
    0% {
      transform: translate(-100%, 100%) rotate(-540deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  transform-style: preserve-3d;
`

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: 0;
  font-size: 1.3rem;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.3) 0 1px 0;
  backface-visibility: hidden;
  background: none;
  border: none;
  cursor: pointer;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2em;
  transition: 0.5s;
  transform-style: preserve-3d;
`

const MenuList = styled.div`
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const MenuItemText = styled(Typography)`
  font-size: 3rem;
  font-family: 'Shining_star';
  cursor: pointer;
  &:hover{
    text-decoration: #137 wavy underline;
  }
`

function LibraryLeaflet ({setIsOpen, category, title, color}) {
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);
  const [pageOne, setPageOne] = useState([]);
  const [pageTwo, setPageTwo] = useState([]);
  const [pageThree, setPageThree] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState({});
  let pageCount = 0;

  useEffect(() => {
    getBookInfo();
  }, []);

  const getBookInfo = async () => {
    const res = await getBooks(category);
    setBookInfo(res.data);
  };

  useEffect(() => {
    let infoLength = Math.ceil(bookInfo.length / 3);
    setPageOne(bookInfo.slice(0, infoLength))
    setPageTwo(bookInfo.slice(infoLength, infoLength*2))
    setPageThree(bookInfo.slice(infoLength*2))
  }, [bookInfo]);

  useEffect(() => {
    const leaflet = document.querySelector('#leaflet');

    leaflet.addEventListener('click', e => {
      let pageElem = getTarget(e.target, 'page');
      if (pageElem) {
        pageElem.classList.add('page-flipped');
        pageCount++;

        if (pageCount == 2) {
          setIsCloseOpen(true);
        }
      }
    })

    // animation 충돌로 초기 animation 작동 후 바로 제거
    leaflet.addEventListener('animationend', () => {
      leaflet.style.animation = 'none';
    })
  }, [])

  // get target by className
  const getTarget = (elem, className) => {
    while (!elem.classList.contains(className)) {
      elem = elem.parentNode;

      if (elem.nodeName === 'BODY') {
        elem = null;
        return;
      }
    }
    return elem;
  }

  const closeLeaflet = () => {
    const pageElems = document.querySelectorAll('.page');

    pageCount = 0;
		pageElems[2].classList.remove('page-flipped');
		setTimeout(() => {
			pageElems[0].classList.remove('page-flipped');
		}, 500);
  }

  const handleMenuItem = (item) => {
    setCurrentMenuItem(item);
    setIsDetailOpen(true);
  }

  return (
    <>
      <Background src={bg} alt="background"/>
      <LeafletBox>
        <Leaflet3D id="leaflet">
          <div className="page" data-page="1">
            <div className="page-face cover-page" style={{background: color}}>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  color: 'white',
                  fontFamily: 'SDSamliphopangche_Basic',
                  zIndex: '1',
                }}
              >별 보러 가자</Typography>
              <Typography
                sx={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'Shining_star',
                  zIndex: '1',
                }}
              >{title}</Typography>
            </div>
            <div className="page-face">
              <MenuList>
                {pageOne.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleMenuItem(item)} >
                    <MenuItemText>
                      {item.title}
                    </MenuItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </div>
          </div>
          <div className="page" data-page="2">
            <div className="page-face">
              <MenuList>
                {pageTwo.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleMenuItem(item)}>
                    <MenuItemText>
                      {item.title}
                    </MenuItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </div>
            <div className="page-face">아무도 못보는 리플릿 뒷면!</div>
          </div>
          <div className="page" data-page="3">
            <div className="page-face cover-page" style={{background: color}}>
              <Typography
                sx={{
                  fontSize: '1.75rem',
                  color: 'white',
                  fontFamily: 'Shining_star',
                  zIndex: '1',
                }}
              >궁금한 {title}
                { title === '우주에 관한 상식' ?
                  <span>을 </span>
                  :
                  <span>를 </span>
                }
              선택해보세요.</Typography>
            </div>
            <div className="page-face">
              <MenuList>
                {pageThree.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleMenuItem(item)}>
                    <MenuItemText>
                      {item.title}
                    </MenuItemText>
                  </MenuItem>
                ))}
              </MenuList>
              { isCloseOpen && <CloseButton id="close-btn" onClick={closeLeaflet}>✗</CloseButton>}
            </div>
          </div>
        </Leaflet3D>
      </LeafletBox>
      <LibraryDetailDialog detailInfo={currentMenuItem} open={isDetailOpen} setOpen={setIsDetailOpen} />
    </>
  );
}

export default LibraryLeaflet;
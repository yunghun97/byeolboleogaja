import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import bg from '@/assets/img/library/img-tablewood.jpg';
import '@/assets/img/library/main.css';
import { getBooks } from '@/api/library';

const LeafletBox = styled.div`
  // 3D
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
	transition: 1s;
	// cursor: pointer;
  transform-style: preserve-3d;
  animation: start-ani 1s forwards;
  @keyframes start-ani {
    0% {
      transform: translate(-100%, 100%) rotate(-540deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
`

const Leaflet3D = styled.div`
  margin: auto;
  height: 100%;
  transform-style: preserve-3d;
  transition: 1s;
	// cursor: pointer;
  z-index: 100;
`

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const CloseButton = styled(Button)`
  position: absolute;
  top: -2rem;
  right: 0;
  font-size: 0.7rem;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.3) 0 1px 0;
  backface-visibility: hidden;
  // z-index: 100;
`

const BackButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 30px;
  // z-index: 100;
`

function LibraryLeaflet ({setIsOpen, category, title, color}) {
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  const [backBtnOpen, setBackBtnOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);
  const [pageOne, setPageOne] = useState([]);
  const [pageTwo, setPageTwo] = useState([]);
  const [pageThree, setPageThree] = useState([]);
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const currentMenu = useRef({});
  let pageCount = 0;

  useEffect(() => {
    getBookInfo();
  }, []);

  const getBookInfo = async () => {
    const res = await getBooks(category);
    setBookInfo(res.data);
    console.log('bookInfo', bookInfo);
  };

  useEffect(() => {
    let infoLength = Math.ceil(bookInfo.length / 3);
    // console.log('infoLength', infoLength);
    // console.log(typeof infoLength);
    setPageOne(bookInfo.slice(0, infoLength))
    setPageTwo(bookInfo.slice(infoLength, infoLength*2))
    setPageThree(bookInfo.slice(infoLength*2))
    // console.log('1', pageOne);
    // console.log('2', pageTwo);
    // console.log('3', pageThree);
  // }, []);
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

      const menuItemElem = getTarget(e.target, 'menu-item')
      if (menuItemElem) {
        if (!document.body.classList.contains('zoom-in')) {
					zoomIn(menuItemElem);
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
		document.body.classList.remove('leaflet-opened');
		pageElems[2].classList.remove('page-flipped');
		setTimeout(() => {
			pageElems[0].classList.remove('page-flipped');
		}, 500);
    zoomOut();
  }

  const zoomIn = (elem) => {
    // rect = 해당 element의 위치, 크기 정보
    const rect = elem.getBoundingClientRect();
    const dx = window.innerWidth/2 - (rect.x + rect.width/2);
    const dy = window.innerHeight/2 - (rect.y + rect.height/2);
    // const dy = window.innerHeight/8;
    console.log(window.innerHeight);
    let angle;

    switch (elem.parentNode.parentNode.parentNode.dataset.page*1) {
      case 1:
        angle = -50;
        break;
      case 2:
        angle = 0;
        break;
      case 3:
        angle = 50;
        break;
    }
    document.body.classList.add('zoom-in');
    leaflet.style.transform = `translate3d(${dx}px, -${dy}px, 50vw) rotateY(${angle}deg)`
    // leaflet.style.transform = `translate3d(${dx}px, -30vh, 50vw) rotateY(${angle}deg)`

    currentMenu.current = elem;
    currentMenu.current.classList.add('current-menu');
    setBackBtnOpen(true);
  }

  const zoomOut = () => {
    console.log('zoomOut');
    leaflet.style.transform = 'translate3d(0, 0, 0)';
    console.log(currentMenu);
    if (currentMenu) {
      setBackBtnOpen(false);
      document.body.classList.remove('zoom-in');
      currentMenu.current.classList.remove('current-menu');
      currentMenu.current= null;
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleMenuItem = (index) => {
    setCurrentMenuItem(index)
  }

  return (
    <>
      <Background src={bg} alt="background"/>
      <Button
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
          onClick={handleClose}
        >
          돌아가기
      </Button>
      <LeafletBox>
        <Leaflet3D id="leaflet">
          <div className="page" data-page="1">
            <div className="page-face cover-page" style={{background: color}}>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: 'white',
                }}
              >별 보러 가자</Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >{title}</Typography>
            </div>
            <div className="page-face">
              <ul className="menu-list">
                {pageOne.map((item, index) => (
                  // infinite rerendering error occurs
                  <li className="menu-item" key={index} onClick={() => handleMenuItem(index)} >
                  {/* <li className="menu-item" key={index}> */}
                    <div className="menu-item-info">
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      >{item.title}</Typography>
                      { currentMenuItem === index &&
                        <Typography
                        sx={{
                          fontSize: '0.1rem',
                          fontWeight: 'light',
                        }}
                        >{item.content}</Typography>
                      }
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>←</BackButton>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="page" data-page="2">
            <div className="page-face">
              <ul className="menu-list">
                {pageTwo.map((item, index) => (
                  <li className="menu-item" key={index} onClick={() => handleMenuItem(index)}>
                    <div className="menu-item-info">
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      >{item.title}</Typography>
                      { currentMenuItem === index &&
                        <Typography
                        sx={{
                          fontSize: '0.1rem',
                          fontWeight: 'light',
                        }}
                        >{item.content}</Typography>
                      }
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>←</BackButton>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="page-face">아무도 못보는 리플릿 뒷면!</div>
          </div>
          <div className="page" data-page="3">
            <div className="page-face cover-page" style={{background: color}}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '1rem',
                  color: 'white',
                }}
              >궁금한 {title}를 선택해보세요.</Typography>
            </div>
            <div className="page-face">
              <ul className="menu-list">
                {pageThree.map((item, index) => (
                  <li className="menu-item" key={index} onClick={() => handleMenuItem(index)}>
                    <div className="menu-item-info">
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      >{item.title}</Typography>
                      { currentMenuItem === index &&
                        <Typography
                        sx={{
                          fontSize: '0.1rem',
                          fontWeight: 'light',
                        }}
                        >{item.content}</Typography>
                      }
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>←</BackButton>}
                  </li>
                ))}
              </ul>
              { isCloseOpen && <CloseButton id="close-btn" onClick={closeLeaflet}>✗</CloseButton>}
            </div>
          </div>
        </Leaflet3D>
      </LeafletBox>
    </>
  );
}

export default LibraryLeaflet;
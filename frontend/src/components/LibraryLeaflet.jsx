import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import bg from '@/assets/img/library/img-tablewood.jpg';
import '@/assets/img/library/main.css';
import { getBooks } from '@/api/library';
import LibraryDetailDialog from '@/components/LibraryDetailDialog';

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

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2em;
  transition: 0.5s;
  transform-style: preserve-3d;
  &:hover {
    cursor: pointer;
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

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpenDetail = () => {
    setIsDetailOpen(true);
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  }

  const handleMenuItem = (page, index) => {
    setCurrentMenuItem({page, index});
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
                  <MenuItem key={index} onClick={() => handleMenuItem(0, index)} >
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >{item.title}</Typography>
                    { currentMenuItem.page === 0 && currentMenuItem.index === index &&
                      <LibraryDetailDialog title={item.title} open={isDetailOpen} content={item.content} setOpen={setIsDetailOpen} />
                    }
                  </MenuItem>
                ))}
              </ul>
            </div>
          </div>
          <div className="page" data-page="2">
            <div className="page-face">
              <ul className="menu-list">
                {pageTwo.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleMenuItem(1, index)}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >{item.title}</Typography>
                    { currentMenuItem.page === 1 && currentMenuItem.index === index &&
                      <LibraryDetailDialog title={item.title} open={isDetailOpen} content={item.content} setOpen={setIsDetailOpen} />
                    }
                  </MenuItem>
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
              >궁금한 {title}
                { title === '우주에 관한 상식' ?
                  <span>을 </span>
                  :
                  <span>를 </span>
                }
              선택해보세요.</Typography>
            </div>
            <div className="page-face">
              <ul className="menu-list">
                {pageThree.map((item, index) => (
                  <MenuItem key={index} onClick={() => handleMenuItem(2, index)}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >{item.title}</Typography>
                    {/* { currentMenuItem.page === 3 && currentMenuItem.index === index && <LibraryDetailDialog title={item.title} open={isDetailOpen} content={item.content} setOpen={setIsDetailOpen} />} */}
                    { currentMenuItem.page === 2 && currentMenuItem.index === index &&
                      <LibraryDetailDialog title={item.title} open={isDetailOpen} content={item.content} setOpen={setIsDetailOpen} />
                    }
                  </MenuItem>
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
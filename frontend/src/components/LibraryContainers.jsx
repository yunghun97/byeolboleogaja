import { jsx, css, keyframes } from '@emotion/react'
import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
// 각 이야기에 맞는 사진으로 변경하거나 사진 아얘 삭제
import logo from '@/assets/img/common/logo-rmbg.png';
import bg from '@/assets/img/library/img-bookshelf.png';
import '@/assets/img/library/main.css';
import LibraryDetail from '@/components/LibraryDetail';
import { getBooks } from '@/api/library';

const sectionStyle = {
  backgroundImage: `url(${logo})`
};

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
`

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CloseButton = styled(Button)`
  position: absolute;
  top: -2rem;
  right: 0;
  font-size: 0.7rem;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.3) 0 1px 0;
  backface-visibility: hidden;
`

const BackButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
`

function LibraryContainers () {
  const [isOpen, setIsOpen] = useState(false);
  const [backBtnOpen, setBackBtnOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);
  const currentMenu = useRef({});
  let pageCount = 0;

  // setBookInfo(async () => {
  //   return await getBooks()
  // })
  // console.log('bookInfo', bookInfo);
  // const initSatellite = async (satelliteId) => {
  //   const res = await getSatellite(satelliteId);
  //   setSatellite(res.data);
  // };

  // useEffect(() => {
  //   setBookInfo(async () => {
  //   return await getBooks()
  //   })
  //   console.log('bookInfo', bookInfo);
  // }, [])

  useEffect(() => {
    const leaflet = document.querySelector('#leaflet');
    // const pageElems = document.querySelectorAll('.page');
    // let pageCount = 0;
    // let currentMenu;

    leaflet.addEventListener('click', e => {
      let pageElem = getTarget(e.target, 'page');
      if (pageElem) {
        pageElem.classList.add('page-flipped');
        pageCount++;

        if (pageCount == 2) {
          setIsOpen(true);
        }
      }

      // const closeBtn = document.querySelector('#close-btn');
      // if (closeBtn) {
      //   closeBtn.addEventListener('click', e => {
      //     // 리플릿 닫기
      //     pageCount = 0;
      //     setTimeout(() => {
      //       pageElems[2].classList.remove('page-flipped');
      //     }, 100)
      //     setTimeout(() => {
      //       pageElems[0].classList.remove('page-flipped');
      //     }, 800)
      //   })
      // }

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
  })

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
    let angle;

    console.log('page', elem.parentNode.parentNode.parentNode.dataset.page);
    switch (elem.parentNode.parentNode.parentNode.dataset.page*1) {
      case 1:
        angle = -50;
        console.log('got angle 1');
        break;
      case 2:
        angle = 0;
        console.log('got angle 2');
        break;
      case 3:
        angle = 50;
        console.log('got angle 3');
        break;
    }
    console.log('pagepage', elem.parentNode.parentNode.parentNode.dataset);
    document.body.classList.add('zoom-in');
    leaflet.style.transform = `translate3d(${dx}px, ${dy}px, 50vw) rotateY(${angle}deg)`

    currentMenu.current = elem;
    currentMenu.current.classList.add('current-menu');
    setBackBtnOpen(true);
  }

  // const zoomOut = (elem) => {
  const zoomOut = () => {
    console.log('zoomout');
    console.log(leaflet.style.transform);
    leaflet.style.transform = 'translate3d(0, 0, 0)';
    console.log(leaflet.style.transform);
    // current Menu가 안찍히는 상황
    // currentMenu = elem;
    console.log('currentMenu', currentMenu);
    if (currentMenu) {
      setBackBtnOpen(false);
      document.body.classList.remove('zoom-in');
      currentMenu.current.classList.remove('current-menu');
      currentMenu.current= null;
    }
  }

    return (
      <>
        <Background src={bg} alt="background" />
        <LibraryDetail open={detailOpen} setOpen={setDetailOpen}/>
        <LeafletBox>
          <div className="leaflet" id="leaflet">
            <div className="page" data-page="1">
              <div className="page-face cover-page">
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
                >별자리 이야기</Typography>
              </div>
              <div className="page-face">
                <ul className="menu-list">
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Ilbuni</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Jane Doe</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Jane Doe</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                </ul>
              </div>
            </div>
            <div className="page" data-page="2">
              <div className="page-face">
                <ul className="menu-list">
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Ilbuni</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Jane Doe</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                </ul>
              </div>
              <div className="page-face">2B</div>
            </div>
            <div className="page" data-page="3">
              <div className="page-face cover-page">
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '1rem',
                    color: 'white',
                  }}
                >궁금한 별자리 이야기를 선택해보세요.</Typography>
              </div>
              <div className="page-face">
                <ul className="menu-list">
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Ilbuni</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                  <li className="menu-item">
                    <figure className="menu-item-photo" style={ sectionStyle }></figure>
                    <div className="menu-item-info">
                      <p className="member-name">Jane Doe</p>
                    </div>
                    { backBtnOpen && <BackButton onClick={zoomOut}>← Back</BackButton>}
                  </li>
                </ul>
                { isOpen && <CloseButton id="close-btn" onClick={closeLeaflet}>✗</CloseButton>}
              </div>
            </div>
          </div>
        </LeafletBox>
      </>
    );
}

export default LibraryContainers;
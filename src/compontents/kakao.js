import React from 'react';
import styled from 'styled-components';
import kakao from '../assets/btn/btn_kakao.svg';

const { Kakao } = window;

const ShareBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;

  margin-right:1.6rem;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const Img = styled.img`
`

function KaKao({ _title, _sub, _imageUrl, _finalType }) {

    let replaced_sub = _sub.replace('<br/>', ' ');

    let replaced_imageUrl = ''
    if (_finalType === 7) {
     replaced_imageUrl = 'https://localhost:3000/' + _imageUrl.replace('../', '');
    }

    const onHandleShareKaKao = () => {

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: replaced_sub + ', \'' + _title + '\'',
                description: 'Beer Dobby!\n 나의 맥주 취향은 무엇일까?',
                imageUrl: replaced_imageUrl,
                link: {
                    webUrl: 'https://localhost:3000/',
                    mobileWebUrl: 'https://localhost:3000/',
                }
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        webUrl: 'https://localhost:3000/' + _finalType,
                        mobileWebUrl: 'https://localhost:3000/' + _finalType,
                    }
                },
                {
                    title: '테스트하기',
                    link: {
                        webUrl: 'https://localhost:3000/',
                        mobileWebUrl: 'https://localhost:3000/',
                    }
                }
            ]
        });
    };

    return (
        <ShareBtn value="KaKao" onClick={onHandleShareKaKao} >
            <Img src={kakao} />
        </ShareBtn>
    );
}

export default KaKao;
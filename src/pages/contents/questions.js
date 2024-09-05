// 4 미만이 노랗고 청량감있는 맥주. 4 이상이 무거운 흑맥주

const questions = [
    {//0
        'question': '눈 앞에 등장한 맥주! <br/> 맥주는.. ',
        'answers': [
            {
                text: '거품만 있고 맑아요!😆',
                score: 3 // 1.5
            },
            {
                text: '밀도있고 불투명해요!🫡',
                score: 7 // 3.5
            }
        ],
        'weight': 0.5
    },
    {//1
        'question': '맥주의 목넘김은!',
        'answers': [
            {
                text: '가볍고 시원한 목넘김이지!😁',
                score: 3 // 1.5
            },
            {
                text: '묵직하고 강한맛을 좋아하지!👍',
                score: 7 // 3.5
            }
        ],
        'weight': 0.5
    },
    {//2
        'question': '맥주의 뒷맛은!',
        'answers': [
            {
                text: '깔끔해야지!🤞',
                score: 3 // 1.5
            },
            {
                text: '쌉사름한 맛이 맥주의 매력!😎',
                score: 7 // 3.5
            }
        ],
        'weight': 0.5
    },
    {//3
        'question': '맥주의 알콜 도수는!',
        'answers': [
            {
                text: '평균적인 도수! 부담없게👌',
                score: 3 // 1.5
            },
            {
                text: '강해야지 그럼. 스트롱💪',
                score: 7 // 3.5
            }
        ],
        'weight': 0.5
    },
    {//4
        'question': '맥주의 향은!',
        'answers': [
            {
                text: '딱히 맥주향을 즐기지 않거나 <br/> 맥주보리향만 느껴요😏',
                score: 4 // 2.0
            },
            {
                text: '과일향, 꽃향등이 풍부한 <br/> 맥주를 즐겨요🫡',
                score: 6 // 3.0
            }
        ],
        'weight': 0.5
    },
    {//5
        'question': '맥주와 흑맥주 중 나는!',
        'answers': [
            {
                text: '화려하고 시원시원한 황금빛 맥주✨',
                score: 3 // 1.5
            },
            {
                text: '딥다크하고 진한 매력의 흑맥주🖤',
                score: 7 // 3.5
            }
        ],
        'weight': 0.5
    },
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]

export default questions;
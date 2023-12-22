// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "행복의 계절, 매서운 추위만큼 따뜻한 마음" },
  { "number": 2, "message": "이 12월, 행복한 순간이 우리를 감싸네요." },
  { "number": 3, "message": "다 같이 즐겁게 보내는 연말, 행복이 가득합니다!" },
  { "number": 4, "message": "12월의 특별함을 모두와 함께 나누어요." },
  { "number": 5, "message": "각자의 작은 행복이 모여 만드는 특별함!" },
  { "number": 6, "message": "행복이라는 이름의 시간, 모두에게 열려 있어요." },
  { "number": 7, "message": "함께 하는 즐거움, 올해 마지막까지 계속되길 바랍니다." },
  { "number": 8, "message": "12월은 행복한 순간들이 가득한 달이에요." },
  { "number": 9, "message": "우리 모두에게 찾아온 특별한 행복의 계절!" },
  { "number": 10, "message": "매일 매일이 행복으로 가득찬 나날이 되길." },
  { "number": 11, "message": "12월, 당신과 나누는 소중한 시간." },
  { "number": 12, "message": "함께하는 연말, 행복이 여러 가지 모습으로 찾아올 거예요." },
  { "number": 13, "message": "행복의 파도가 모두에게 찾아오길!" },
  { "number": 14, "message": "12월, 각자의 작은 행복이 모여 큰 기쁨이 될 거예요." },
  { "number": 15, "message": "모두에게 행복이 넘치는 연말연시를 기대해봐요." },
  { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
  { "number": 17, "message": "모두에게 행복한 시간이 되길 기대합니다!" },
  { "number": 18, "message": "12월, 온기 가득, 마음으로 채워져 있는 시간." },
  { "number": 19, "message": "다양한 행복을 모아 하나로 뭉쳐요" },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 순간들." },
  { "number": 21, "message": "다가오는 크리스마스, 행복이 함께하기를!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
  { "number": 24, "message": "12월 24일, 당신의 기쁨과 행복을 빌어요. 메리 크리스마스!" }
];

// // 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
// const doors = document.querySelectorAll('.door');
// doors.forEach((door, index) => {
//   door.addEventListener('click', () => {
//     // 상위 div의 class 번호를 찾아서 image url에 사용합니다
//     const imageUrl = `image/card/card-${index + 1}.png`;

//     // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
//     const doorDiv = document.querySelector(`.day-${index + 1}`)
//     const backDiv = doorDiv.querySelector(`.back`);

//     const style = window.getComputedStyle(backDiv);
//     const pTag = backDiv.querySelector('p')
//     const text = modalMessageList[index]['message']

//     // showModal 함수를 호출하여 모달을 표시합니다.
//     showModal(imageUrl, text);
//     // alert('이벤트 캘린더를 엽니다.');
//   });
// });

// 카드 뒤집고 모달 표시하는 위 기능을 날짜 기준 추가하여 countdown.js에서 작성
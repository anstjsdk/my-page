const quotes = [
  { quote: "밥먹자", author: "문선아" },
  { quote: "개발하지말고먹자", author: "만두" },
  { quote: "푸딩먹자", author: "푸딩집사장" },
  { quote: "떡볶이먹자", author: "떡순이" },
  { quote: "치킨먹자", author: "치느님" },
  { quote: "라면먹자", author: "해장왕" },
  { quote: "만두먹자", author: "만두장인" },
  { quote: "냉면먹자", author: "여름계왕" },
  { quote: "김밥먹자", author: "김선생" },
  { quote: "피자먹자", author: "치즈러버" },
  { quote: "분식먹자", author: "분식회장" },
  { quote: "마라탕먹자", author: "마라중독자" },
  { quote: "햄버거먹자", author: "3개" },
  { quote: "라면말고", author: "파스타먹자" },
  { quote: "샤브샤브먹자", author: "육수연구가" },
  { quote: "족발먹자", author: "족발러버" },
  { quote: "갈비먹자", author: "갈비집사" },
  { quote: "순두부먹자", author: "순두부장" },
  { quote: "토스트먹자", author: "선아" },
  { quote: "볶음밥먹자", author: "밥도둑" },
  { quote: "우동먹자", author: "면발장인" },
  { quote: "케이크먹자", author: "디저트요정" },
  { quote: "붕어빵먹자", author: "겨울왕자" },
  { quote: "스테이크먹자", author: "고기파워" },
  { quote: "미역국먹자", author: "생일주인공" },
  { quote: "우유말고", author: "커" },
  { quote: "샌드위치먹자", author: "브런치러버" },
  { quote: "오므라이스먹자", author: "계란장인" },
  { quote: "탕수육먹자", author: "추베롭" },
];
const quote = document.querySelector(".quote-text");
const author = document.querySelector(".author-text");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;

const timeStampDate = new Date();
const timeStamp =
  timeStampDate.getFullYear() +
  "年" +
  (timeStampDate.getMonth() + 1) +
  "月" +
  timeStampDate.getDate() +
  "日" +
  timeStampDate.getHours() +
  "時" +
  timeStampDate.getMinutes() +
  "分" +
  timeStampDate.getSeconds() +
  "秒";

const timeStamp2 =
  timeStampDate.getFullYear() +
  "年" +
  (timeStampDate.getMonth() + 1) +
  "月" +
  (timeStampDate.getDate() - 1) +
  "日" +
  timeStampDate.getHours() +
  "時" +
  timeStampDate.getMinutes() +
  "分" +
  timeStampDate.getSeconds() +
  "秒";

export const riderData = [
  {
    riderId: "maskedRider01",
    title: "仮面ライダー０１",
    miniImageUrl: "test",
    topImageUrl: "test",
    favoriteTotallPoint: 95,
    favoriteNumberOfPeople: 10,
    synopsis: "若きID企業の社長が夢に向かって飛び立つ",
    subscriptSurvice: [
      { surviceTitle: "Netflix", surviceLink: "testNetflix" },
      { surviceTitle: "Hulu", surviceLink: "testHulu" },
      { surviceTitle: "東映特撮ファンクラブ", surviceLink: "testTOEI" },
    ],
    review: [
      {
        reviewTitle: "意外と面白かった",
        reviewId: "FFFFF",
        reviewContent: "新時代を担う仮面ライダーとして活躍してくれた！",
        timeStamp: { timeStamp },
      },
      {
        reviewTitle: "子供には少し難しすぎのでは！？",
        reviewId: "EEEEEEEE",
        reviewContent:
          "子供と一緒に楽しませていただいておりましたが、途中で飽きてしまった模様です",
        timeStamp: { timeStamp2 },
      },
    ],
  },
  {
    riderId: "maskedRiderBuild",
    title: "仮面ライダービルド",
    miniImageUrl: "test",
    topImageUrl: "test",
    favoriteTotallPoint: 87,
    favoriteNumberOfPeople: 17,
    synopsis: "天才物理学者が正義の味方に変身する！さあ、実験をはじめよう。",
    subscriptSurvice: [
      { surviceTitle: "Netflix", surviceLink: "testNetflix" },
      { surviceTitle: "Hulu", surviceLink: "testHulu" },
      { surviceTitle: "東映特撮ファンクラブ", surviceLink: "testTOEI" },
      { surviceTitle: "TELASA", surviceLink: "testTELASA" },
    ],
    review: [
      {
        reviewTitle: "仮面ライダーで社会問題への問題定義を行う",
        reviewId: "QQQQQQ",
        reviewContent:
          "戦争という重いテーマを真摯に扱い、かつポップで笑えるシーンも盛り込んだ名作",
        timeStamp: { timeStamp },
      },
      {
        reviewTitle: "グリスしか勝たん！",
        reviewId: "EEEEEEEE",
        reviewContent:
          "仮面ライダーグリスのカッコよさに惚れました！！まだ視聴途中ですが、最後までみたい！！",
        timeStamp: { timeStamp2 },
      },
    ],
  },
];

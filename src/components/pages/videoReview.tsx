import React, { useEffect, useState } from "react";
import { riderData } from "../../Db";

type RiderDataType = {
  riderId: string;
  title: string;
  miniImageUrl: string;
  topImageUrl: string;
  favoriteTotallPoint: number;
  favoriteNumberOfPeople: number;
  broadCastYear: string;
  synopsis: string;
  subscriptSurvice: {
    surviceTitle: string;
    surviceLink: string;
  }[];
  review: {
    reviewTitle: string;
    reviewId: string;
    reviewContent: string;
    timeStamp: string;
  }[];
}[];
type RiderType = {
  riderId: string;
  title: string;
  miniImageUrl: string;
  topImageUrl: string;
  favoriteTotallPoint: number;
  favoriteNumberOfPeople: number;
  broadCastYear: string;
  synopsis: string;
  subscriptSurvice: {
    surviceTitle: string;
    surviceLink: string;
  }[];
  review: {
    reviewTitle: string;
    reviewId: string;
    reviewContent: string;
    timeStamp: string;
  }[];
};

const VideoReview: React.FC = () => {
  const [reviewRider, setReviewRider] = useState<RiderType>();
  const riderID = "maskedRider01";
  console.log(riderData);

  const riderJudge = (riderData: RiderDataType) => {
    riderData.map((rider) => {
      if (rider.riderId === riderID) {
        console.log(rider.title);
        setReviewRider(rider);
      }
    });
  };
  useEffect(() => {
    riderJudge(riderData);
  }, []);

  return (
    <div>
      <h2>作品レビュー</h2>
      <p>{reviewRider?.title}</p>
      <p>{reviewRider?.miniImageUrl}</p>
      <p>{reviewRider?.topImageUrl}</p>
      <p>{reviewRider?.favoriteTotallPoint}</p>
      <p>{reviewRider?.favoriteNumberOfPeople}</p>
      <p>{reviewRider?.synopsis}</p>
      <p>{reviewRider?.broadCastYear}</p>
      <h2>サブスク</h2>
      {reviewRider?.subscriptSurvice.map((survice, index) => {
        return <li key={index}>{survice.surviceTitle}</li>;
      })}
      <h2>レビュー</h2>
      {reviewRider?.review.map((review) => {
        return (
          <div key={review.reviewId}>
            <p>{review.reviewTitle}</p>
            <p>{review.reviewContent}</p>
            <p>{review.timeStamp}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoReview;
